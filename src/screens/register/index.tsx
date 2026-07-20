import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { getApiErrorMessage, register } from '../../api';
import { authStyles } from '../login';
import { useAuthStore } from '../../store/useAuthStore';

type RegisterScreenProps = {
  topInset: number;
  onNavigateToLogin: () => void;
};

export default function RegisterScreen({
  topInset,
  onNavigateToLogin,
}: RegisterScreenProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setSession = useAuthStore(state => state.setSession);

  const canSubmit =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length > 0 &&
    !isSubmitting;

  const handleRegister = async () => {
    if (!canSubmit) return;
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const session = await register({
        email: email.trim(),
        password,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      });
      setSession(session);
    } catch (err) {
      setError(getApiErrorMessage(err, 'Could not create your account.'));
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
          <Text style={authStyles.loginSubtitle}>Create Your Account</Text>
        </View>

        <View style={authStyles.loginForm}>
          <View style={styles.registerNameRow}>
            <View style={[authStyles.loginField, styles.registerNameField]}>
              <Text style={authStyles.loginLabel}>First Name</Text>
              <TextInput
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
                placeholder="Tai"
                style={authStyles.loginInput}
              />
            </View>

            <View style={[authStyles.loginField, styles.registerNameField]}>
              <Text style={authStyles.loginLabel}>Last Name</Text>
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
                placeholder="Nguyen"
                style={authStyles.loginInput}
              />
            </View>
          </View>

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

          <View style={authStyles.loginField}>
            <Text style={authStyles.loginLabel}>Confirm Password</Text>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholder="........"
              style={authStyles.loginInput}
            />
          </View>

          {error ? (
            <Text style={authStyles.authErrorText}>{error}</Text>
          ) : null}

          <Pressable
            style={[
              authStyles.loginPrimaryButton,
              !canSubmit && authStyles.loginPrimaryButtonDisabled,
            ]}
            onPress={handleRegister}
            disabled={!canSubmit}>
            {isSubmitting ? (
              <ActivityIndicator color="#005027" />
            ) : (
              <Text style={authStyles.loginPrimaryButtonText}>Sign Up</Text>
            )}
          </Pressable>

          <View style={authStyles.loginHelperRow}>
            <Text style={authStyles.loginHelperText}>
              Already have an account?
            </Text>
            <Pressable onPress={onNavigateToLogin}>
              <Text style={authStyles.loginHelperAction}>Log In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

// Register-only styles (name field layout); everything else is shared
// with the login screen via `authStyles`.
const styles = StyleSheet.create({
  registerNameRow: {
    flexDirection: 'row',
    gap: 10,
  },
  registerNameField: {
    flex: 1,
  },
});
