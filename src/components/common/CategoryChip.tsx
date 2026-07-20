import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TOKENS } from '../../constants/tokens';

type CategoryChipProps = {
  label: string;
  active?: boolean;
};

export default function CategoryChip({
  label,
  active = false,
}: CategoryChipProps) {
  return (
    <View style={styles.categoryChipWrap}>
      <View style={[styles.categoryChip, active && styles.categoryChipActive]}>
        <Text
          style={[
            styles.categoryChipText,
            active && styles.categoryChipTextActive,
          ]}
        >
          {label.slice(0, 2).toUpperCase()}
        </Text>
      </View>
      <Text
        style={[
          styles.categoryChipLabel,
          !active && styles.categoryChipLabelMuted,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryChipWrap: {
    alignItems: 'center',
    gap: 8,
    width: '24%',
  },
  categoryChip: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: TOKENS.surfaceHighest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryChipActive: {
    backgroundColor: TOKENS.primaryContainer,
  },
  categoryChipText: {
    color: TOKENS.onBackground,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  categoryChipTextActive: {
    color: '#005027',
  },
  categoryChipLabel: {
    color: TOKENS.onBackground,
    fontSize: 11,
    fontWeight: '600',
  },
  categoryChipLabelMuted: {
    opacity: 0.5,
  },
});
