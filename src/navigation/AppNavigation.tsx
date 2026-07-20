import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabScreen } from '../constants/tokens';
import AddTransactionScreen from '../screens/add-transaction';
import BudgetScreen from '../screens/budget';
import DashboardScreen from '../screens/dashboard';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import StatisticsScreen from '../screens/statistics';
import { useAuthStore } from '../store/useAuthStore';
import { appStyles } from '../theme/appStyles';
import BottomNavigation from './BottomNavigation';

type AuthScreen = 'login' | 'register';

export default function AppNavigation() {
  const insets = useSafeAreaInsets();
  const isAuthenticated = useAuthStore(
    state => Boolean(state.user) && Boolean(state.accessToken),
  );
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [activeScreen, setActiveScreen] = useState<TabScreen>('dashboard');

  const isAddTransaction = activeScreen === 'add-transaction';
  const hideBottomNav = !isAuthenticated || isAddTransaction;

  const screen = useMemo(() => {
    if (!isAuthenticated) {
      if (authScreen === 'register') {
        return (
          <RegisterScreen
            topInset={insets.top}
            onNavigateToLogin={() => setAuthScreen('login')}
          />
        );
      }
      return (
        <LoginScreen
          topInset={insets.top}
          onNavigateToRegister={() => setAuthScreen('register')}
        />
      );
    }
    if (activeScreen === 'statistics') {
      return (
        <StatisticsScreen topInset={insets.top} bottomInset={insets.bottom} />
      );
    }
    if (activeScreen === 'budget') {
      return <BudgetScreen topInset={insets.top} bottomInset={insets.bottom} />;
    }
    if (activeScreen === 'add-transaction') {
      return (
        <AddTransactionScreen
          topInset={insets.top}
          bottomInset={insets.bottom}
          onClose={() => setActiveScreen('dashboard')}
        />
      );
    }
    return (
      <DashboardScreen topInset={insets.top} bottomInset={insets.bottom} />
    );
  }, [activeScreen, authScreen, insets.bottom, insets.top, isAuthenticated]);

  return (
    <SafeAreaView style={appStyles.appRoot}>
      {screen}
      {!hideBottomNav ? (
        <BottomNavigation
          activeScreen={activeScreen}
          bottomInset={insets.bottom}
          onTabPress={setActiveScreen}
        />
      ) : null}
    </SafeAreaView>
  );
}
