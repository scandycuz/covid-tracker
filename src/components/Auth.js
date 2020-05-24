import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Signup from 'components/Signup';
import Login from 'components/Login';
import Color from 'util/Color';
import {logo} from 'assets/images';

function Auth({error, logIn, signUp, setError}) {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo({x: 16, y: 0, animated: false});
  }, []);

  const {width} = Dimensions.get('window');

  const handleNavigation = name => {
    const pos = {Signup: 16, Login: width + 16};

    scrollRef.current.scrollTo({x: pos[name], y: 0});
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        useAngle
        style={styles.gradient}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={[Color.purple.light, Color.purple.dark]}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <ScrollView
              horizontal
              pagingEnabled
              ref={scrollRef}
              style={styles.scrollContainer}
              scrollEnabled={false}
              snapToAlignment={'center'}>
              <View style={{width}}>
                <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={logo} />
                </View>
                <Signup
                  error={error}
                  setError={setError}
                  onSubmit={signUp}
                  navigate={handleNavigation}
                />
              </View>
              <View style={{width}}>
                <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={logo} />
                </View>
                <Login
                  error={error}
                  setError={setError}
                  onSubmit={logIn}
                  navigate={handleNavigation}
                />
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}

export default Auth;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 124,
    height: 124,
    opacity: 0.85,
  },
  scrollContainer: {
    flexGrow: 0,
  },
});
