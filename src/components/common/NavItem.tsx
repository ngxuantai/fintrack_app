import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { appStyles } from '../../theme/appStyles';

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
    <Pressable style={appStyles.navItem} onPress={onPress}>
      <View style={[appStyles.navGlyph, active && appStyles.navGlyphActive]}>
        <Text
          style={[
            appStyles.navGlyphText,
            active && appStyles.navGlyphTextActive,
          ]}
        >
          {glyph}
        </Text>
      </View>
      <Text style={[appStyles.navLabel, active && appStyles.navLabelActive]}>
        {label.toUpperCase()}
      </Text>
    </Pressable>
  );
}
