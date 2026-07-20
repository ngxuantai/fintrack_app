import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TOKENS } from '../../constants/tokens';

type NavItemProps = {
  label: string;
  glyph: string;
  active: boolean;
  onPress: () => void;
};

export default function NavItem({
  label,
  glyph,
  active,
  onPress,
}: NavItemProps) {
  return (
    <Pressable style={styles.navItem} onPress={onPress}>
      <View style={[styles.navGlyph, active && styles.navGlyphActive]}>
        <Text style={[styles.navGlyphText, active && styles.navGlyphTextActive]}>
          {glyph}
        </Text>
      </View>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>
        {label.toUpperCase()}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    gap: 4,
  },
  navGlyph: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: TOKENS.surfaceHighest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navGlyphActive: {
    backgroundColor: 'rgba(46,204,113,0.2)',
  },
  navGlyphText: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 12,
    fontWeight: '700',
  },
  navGlyphTextActive: {
    color: TOKENS.primary,
  },
  navLabel: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: '600',
  },
  navLabelActive: {
    color: TOKENS.primary,
    fontWeight: '700',
  },
});
