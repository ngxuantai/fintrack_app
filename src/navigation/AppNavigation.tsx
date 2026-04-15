import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabScreen } from '../constants/tokens';
import AddTransactionScreen from '../screens/AddTransaction';
import BudgetScreen from '../screens/Budget';
import DashboardScreen from '../screens/Dashboard';
import StatisticsScreen from '../screens/Statistics';
import { appStyles } from '../theme/appStyles';
import BottomNavigation from './BottomNavigation';

export default function AppNavigation() {
  const insets = useSafeAreaInsets();
  const [activeScreen, setActiveScreen] = useState<TabScreen>('dashboard');

  const isAddTransaction = activeScreen === 'add-transaction';

  const screen = useMemo(() => {
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
  }, [activeScreen, insets.bottom, insets.top]);

  return (
    <SafeAreaView style={appStyles.appRoot}>
      {screen}
      {!isAddTransaction ? (
        <BottomNavigation
          activeScreen={activeScreen}
          bottomInset={insets.bottom}
          onTabPress={setActiveScreen}
        />
      ) : null}
    </SafeAreaView>
  );
}
