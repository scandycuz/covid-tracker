import React, {useState} from 'react';
import {KeyboardAvoidingView, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextInput from 'components/core/TextInput';
import PasswordInput from 'components/core/PasswordInput';
import Button from 'components/core/Button';
import Text from 'components/core/Text';
import Color from 'util/Color';

function Signup({error, signUp, setError}) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const clearError = () => {
    setError(null);
  };

  const handleChange = field => value => {
    if (error) clearError();

    setValues(current => ({...current, [field]: value}));
  };

  const handleSubmit = () => {
    signUp({email: values.email, password: values.password});
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        useAngle
        style={styles.gradient}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[Color.purple.light, Color.purple.dark]}>
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Covid Tracker</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.email}>
              <TextInput
                autoFocus
                keyboardType="email-address"
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
              />
            </View>

            <View style={styles.password}>
              <PasswordInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
              />
            </View>

            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.error}>{error}</Text>
              </View>
            )}

            <View style={styles.buttonContainer}>
              <Button onPress={handleSubmit} title="Sign up" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: Color.white,
    fontFamily: 'Barlow-Bold',
  },
  subtitleContainer: {
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 36,
    color: Color.white,
    fontFamily: 'Barlow-Regular',
  },
  inputContainer: {
    width: '100%',
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
});
