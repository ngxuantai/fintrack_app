import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { getApiErrorMessage, login } from '../../api';
import { useAuthStore } from '../../store/useAuthStore';
import { TOKENS } from '../../constants/tokens';

type LoginScreenProps = {
  topInset: number;
  onNavigateToRegister: () => void;
};

export default function LoginScreen({
  topInset,
  onNavigateToRegister,
}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setSession = useAuthStore(state => state.setSession);

  const canSubmit = email.trim().length > 0 && password.length > 0 && !isSubmitting;

  const handleLogin = async () => {
    if (!canSubmit) return;
    setError(null);
    setIsSubmitting(true);
    try {
      const session = await login({ email: email.trim(), password });
      setSession(session);
    } catch (err) {
      setError(getApiErrorMessage(err, 'Invalid email or password.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={[authStyles.loginRoot, { paddingTop: topInset }]}>
      <View style={authStyles.loginTopSpace}>
        <View style={authStyles.logoRow}>
          <View style={authStyles.logoMark}>
            <Text style={authStyles.logoMarkText}>V</Text>
          </View>
          <Text style={authStyles.loginTitle}>VITALITY</Text>
          <Text style={authStyles.loginSubtitle}>Precision Tracking</Text>
        </View>

        <View style={authStyles.loginForm}>
          <View style={authStyles.loginField}>
            <Text style={authStyles.loginLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="name@vitality.com"
              style={authStyles.loginInput}
            />
          </View>

          <View style={authStyles.loginField}>
            <Text style={authStyles.loginLabel}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="........"
              style={authStyles.loginInput}
            />
          </View>

          {error ? <Text style={authStyles.authErrorText}>{error}</Text> : null}

          <Pressable
            style={[
              authStyles.loginPrimaryButton,
              !canSubmit && authStyles.loginPrimaryButtonDisabled,
            ]}
            onPress={handleLogin}
            disabled={!canSubmit}>
            {isSubmitting ? (
              <ActivityIndicator color="#005027" />
            ) : (
              <Text style={authStyles.loginPrimaryButtonText}>Log In</Text>
            )}
          </Pressable>

          <View style={authStyles.loginHelperRow}>
            <Text style={authStyles.loginHelperText}>
              Don't have an account?
            </Text>
            <Pressable onPress={onNavigateToRegister}>
              <Text style={authStyles.loginHelperAction}>Sign Up</Text>
            </Pressable>
          </View>

          <View style={styles.loginSocialRow}>
            <View style={styles.socialButton}>
              <Text style={styles.socialButtonText}>G</Text>
            </View>
            <View style={styles.socialButton}>
              <Text style={styles.socialButtonText}>A</Text>
            </View>
            <View style={styles.socialButton}>
              <Text style={styles.socialButtonText}>B</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

// Shared by the login and register screens — both are simple auth forms
// built from the same field/button/logo styling.
export const authStyles = StyleSheet.create({
  loginRoot: {
    flex: 1,
    backgroundColor: TOKENS.background,
    paddingHorizontal: 24,
  },
  loginTopSpace: {
    paddingTop: 56,
  },
  logoRow: {
    alignItems: 'center',
    gap: 8,
  },
  logoMark: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: TOKENS.surfaceLowest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMarkText: {
    fontSize: 22,
    fontWeight: '800',
    color: TOKENS.primary,
  },
  loginTitle: {
    marginTop: 8,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1.3,
    color: TOKENS.onBackground,
  },
  loginSubtitle: {
    marginTop: 6,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.8,
    color: TOKENS.onSurfaceVariant,
    fontWeight: '600',
  },
  loginForm: {
    marginTop: 42,
    gap: 14,
  },
  loginField: {
    borderRadius: 14,
    backgroundColor: TOKENS.surfaceLow,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
  },
  loginLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: TOKENS.onSurfaceVariant,
    fontWeight: '700',
  },
  loginInput: {
    color: TOKENS.onBackground,
    fontSize: 15,
    fontWeight: '500',
    padding: 0,
  },
  loginPrimaryButton: {
    marginTop: 8,
    height: 56,
    borderRadius: 14,
    backgroundColor: TOKENS.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginPrimaryButtonDisabled: {
    opacity: 0.5,
  },
  loginPrimaryButtonText: {
    color: '#005027',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  authErrorText: {
    color: TOKENS.error,
    fontSize: 12,
    fontWeight: '600',
  },
  loginHelperRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  loginHelperText: {
    color: TOKENS.onSurfaceVariant,
    fontSize: 13,
  },
  loginHelperAction: {
    color: TOKENS.primary,
    fontSize: 13,
    fontWeight: '700',
  },
});

// Login-only styles (social sign-in row) live here, not in authStyles.
const styles = StyleSheet.create({
  loginSocialRow: {
    marginTop: 34,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TOKENS.surfaceHighest,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: TOKENS.onBackground,
  },
});
