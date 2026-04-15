import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TOKENS } from './constants/tokens';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={TOKENS.surfaceLowest}
      />
      <AppNavigation />
    </SafeAreaProvider>
  );
}
