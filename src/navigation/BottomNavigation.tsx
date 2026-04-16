import React from 'react';
import { Pressable, Text, View } from 'react-native';
import NavItem from '../components/common/NavItem';
import { TabScreen } from '../constants/tokens';
import { appStyles } from '../theme/appStyles';

type BottomNavigationProps = {
  activeScreen: TabScreen;
  bottomInset: number;
  onTabPress: (screen: TabScreen) => void;
};

export default function BottomNavigation({
  activeScreen,
  bottomInset,
  onTabPress,
}: BottomNavigationProps) {
  const navItems: Array<{
    key: Exclude<TabScreen, 'add-transaction'>;
    label: string;
    glyph: string;
  }> = [
    { key: 'dashboard', label: 'Home', glyph: 'H' },
    { key: 'statistics', label: 'Stats', glyph: 'T' },
    { key: 'budget', label: 'Budget', glyph: 'B' },
  ];

  return (
    <View
      style={[
        appStyles.bottomNav,
        { paddingBottom: Math.max(bottomInset, 10) },
      ]}
    >
      {navItems.slice(0, 2).map(item => (
        <NavItem
          key={item.key}
          label={item.label}
          glyph={item.glyph}
          active={activeScreen === item.key}
          onPress={() => onTabPress(item.key)}
        />
      ))}

      <Pressable
        style={appStyles.fab}
        onPress={() => onTabPress('add-transaction')}
      >
        <Text style={appStyles.fabText}>+</Text>
      </Pressable>

      {navItems.slice(2).map(item => (
        <NavItem
          key={item.key}
          label={item.label}
          glyph={item.glyph}
          active={activeScreen === item.key}
          onPress={() => onTabPress(item.key)}
        />
      ))}

      <NavItem label="Profile" glyph="P" active={false} onPress={() => {}} />
    </View>
  );
}
