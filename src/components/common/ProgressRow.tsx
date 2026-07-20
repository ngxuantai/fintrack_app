import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TOKENS } from '../../constants/tokens';
import { appStyles } from '../../theme/appStyles';

type ProgressRowProps = {
  label: string;
  amount: string;
  percent: number;
  color: string;
};

export default function ProgressRow({
  label,
  amount,
  percent,
  color,
}: ProgressRowProps) {
  return (
    <View style={styles.progressRow}>
      <View style={appStyles.rowBetween}>
        <Text style={styles.progressLabel}>{label.toUpperCase()}</Text>
        <Text style={styles.progressAmount}>{amount}</Text>
      </View>
      <View style={appStyles.progressTrack}>
        <View
          style={[
            appStyles.progressFill,
            { width: `${Math.round(percent * 100)}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressRow: {
    borderRadius: 14,
    backgroundColor: TOKENS.surfaceLow,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 7,
  },
  progressLabel: {
    color: TOKENS.primary,
    fontSize: 11,
    letterSpacing: 1.6,
    fontWeight: '700',
  },
  progressAmount: {
    color: TOKENS.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});
