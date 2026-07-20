import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import NavItem from '../components/common/NavItem';
import { TabScreen, TOKENS } from '../constants/tokens';

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
      style={[styles.bottomNav, { paddingBottom: Math.max(bottomInset, 10) }]}
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

      <Pressable style={styles.fab} onPress={() => onTabPress('add-transaction')}>
        <Text style={styles.fabText}>+</Text>
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

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(252,249,248,0.88)',
    paddingTop: 10,
    borderTopWidth: 0,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: TOKENS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -24,
  },
  fabText: {
    color: TOKENS.onPrimary,
    fontSize: 30,
    marginTop: -1,
    lineHeight: 34,
    fontWeight: '400',
  },
});
