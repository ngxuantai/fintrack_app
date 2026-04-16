import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { appStyles } from '../../theme/appStyles';

type LoginScreenProps = {
  topInset: number;
  onLogin: () => void;
};

export default function LoginScreen({ topInset, onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[appStyles.loginRoot, { paddingTop: topInset }]}>
      <View style={appStyles.loginTopSpace}>
        <View style={appStyles.logoRow}>
          <View style={appStyles.logoMark}>
            <Text style={appStyles.logoMarkText}>V</Text>
          </View>
          <Text style={appStyles.loginTitle}>VITALITY</Text>
          <Text style={appStyles.loginSubtitle}>Precision Tracking</Text>
        </View>

        <View style={appStyles.loginForm}>
          <View style={appStyles.loginField}>
            <Text style={appStyles.loginLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="name@vitality.com"
              style={appStyles.loginInput}
            />
          </View>

          <View style={appStyles.loginField}>
            <Text style={appStyles.loginLabel}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="........"
              style={appStyles.loginInput}
            />
          </View>

          <Pressable style={appStyles.loginPrimaryButton} onPress={onLogin}>
            <Text style={appStyles.loginPrimaryButtonText}>Log In</Text>
          </Pressable>

          <View style={appStyles.loginHelperRow}>
            <Text style={appStyles.loginHelperText}>
              Don't have an account?
            </Text>
            <Text style={appStyles.loginHelperAction}>Sign Up</Text>
          </View>

          <View style={appStyles.loginSocialRow}>
            <View style={appStyles.socialButton}>
              <Text style={appStyles.socialButtonText}>G</Text>
            </View>
            <View style={appStyles.socialButton}>
              <Text style={appStyles.socialButtonText}>A</Text>
            </View>
            <View style={appStyles.socialButton}>
              <Text style={appStyles.socialButtonText}>B</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
