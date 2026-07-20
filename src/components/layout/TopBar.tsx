import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { TOKENS } from '../../constants/tokens';
import { appStyles } from '../../theme/appStyles';

type TopBarProps = {
  title: string;
  profileUri: string;
};

export default function TopBar({ title, profileUri }: TopBarProps) {
  return (
    <View style={styles.topBar}>
      <View style={appStyles.profileRow}>
        <Text style={styles.settingsButtonText}>V</Text>
        <Text style={appStyles.topBarTitle}>{title}</Text>
        <Image source={{ uri: profileUri }} style={styles.avatar} />
      </View>
      <Pressable style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>N</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: TOKENS.surfaceHighest,
  },
  settingsButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: TOKENS.surfaceLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButtonText: {
    color: TOKENS.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});
