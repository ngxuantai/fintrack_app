import React from 'react';
import { Text, View } from 'react-native';
import { appStyles } from '../../theme/appStyles';

type CategoryChipProps = {
  label: string;
  active?: boolean;
};

export default function CategoryChip({
  label,
  active = false,
}: CategoryChipProps) {
  return (
    <View style={appStyles.categoryChipWrap}>
      <View
        style={[appStyles.categoryChip, active && appStyles.categoryChipActive]}
      >
        <Text
          style={[
            appStyles.categoryChipText,
            active && appStyles.categoryChipTextActive,
          ]}
        >
          {label.slice(0, 2).toUpperCase()}
        </Text>
      </View>
      <Text
        style={[
          appStyles.categoryChipLabel,
          !active && appStyles.categoryChipLabelMuted,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}
