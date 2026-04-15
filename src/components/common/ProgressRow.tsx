import React from 'react';
import { Text, View } from 'react-native';
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
    <View style={appStyles.progressRow}>
      <View style={appStyles.rowBetween}>
        <Text style={appStyles.progressLabel}>{label.toUpperCase()}</Text>
        <Text style={appStyles.progressAmount}>{amount}</Text>
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
