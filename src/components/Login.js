import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from 'components/core/TextInput';
import PasswordInput from 'components/core/PasswordInput';
import Button from 'components/core/Button';
import Link from 'components/core/Link';
import Text from 'components/core/Text';
import Color from 'util/Color';

function Login({navigate, error, onSubmit, setError}) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const disabled = !values.email.length || !values.password.length;

  const passwordRef = useRef();

  const focusPassword = () => {
    passwordRef.current.focus();
  };

  const clearError = () => {
    setError(null);
  };

  const handleChange = field => value => {
    if (error) clearError();

    setValues(current => ({...current, [field]: value}));
  };

  const handleSubmit = () => {
    onSubmit({email: values.email, password: values.password});
  };

  return (
    <View style={styles.root}>
      <View style={styles.email}>
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          value={values.email}
          onChangeText={handleChange('email')}
          onSubmitEditing={focusPassword}
        />
      </View>

      <View style={styles.password}>
        <PasswordInput
          ref={passwordRef}
          placeholder="Password"
          autoCapitalize="none"
          value={values.password}
          onChangeText={handleChange('password')}
          onSubmitEditing={handleSubmit}
        />
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button disabled={disabled} onPress={handleSubmit} title="Login" />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          Don't have an account?{' '}
          <Link onPress={() => navigate('Signup')}>Sign Up</Link>
        </Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  email: {
    marginBottom: 16,
  },
  errorContainer: {
    marginTop: 12,
  },
  error: {
    fontSize: 16,
    textAlign: 'center',
    color: Color.white,
  },
  buttonContainer: {
    marginTop: 20,
  },
  infoContainer: {
    paddingVertical: 26,
    alignItems: 'center',
  },
  info: {
    fontSize: 20,
    color: Color.white,
  },
});
