import React, {useState} from 'react';
import {KeyboardAvoidingView, View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import TextInput from 'components/core/TextInput';
import PasswordInput from 'components/core/PasswordInput';
import Button from 'components/core/Button';
import Color from 'util/Color';

function Signup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = field => value => {
    setValues(current => ({...current, [field]: value}));
  };

  const handleSubmit = () => {
    auth().createUserWithEmailAndPassword(values.email, values.password);
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        style={styles.gradient}
        colors={[Color.ok.dark, Color.ok.light]}>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 112,
  },
  titleContainer: {
    marginBottom: 36,
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
  buttonContainer: {
    marginTop: 20,
  },
});
