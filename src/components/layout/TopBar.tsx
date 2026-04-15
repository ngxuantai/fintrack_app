import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { appStyles } from '../../theme/appStyles';

type TopBarProps = {
  title: string;
  profileUri: string;
};

export default function TopBar({ title, profileUri }: TopBarProps) {
  return (
    <View style={appStyles.topBar}>
      <View style={appStyles.profileRow}>
        <Image source={{ uri: profileUri }} style={appStyles.avatar} />
        <Text style={appStyles.topBarTitle}>{title}</Text>
      </View>
      <Pressable style={appStyles.settingsButton}>
        <Text style={appStyles.settingsButtonText}>SET</Text>
      </Pressable>
    </View>
  );
}
