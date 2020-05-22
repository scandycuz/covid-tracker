import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Signup from 'components/Signup';
import Login from 'components/Login';
import Color from 'util/Color';

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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Covid Tracker</Text>
          </View>

          <View>
            <ScrollView
              horizontal
              pagingEnabled
              ref={scrollRef}
              style={styles.scrollContainer}
              scrollEnabled={false}
              snapToAlignment={'center'}>
              <View style={{width}}>
                <Signup
                  error={error}
                  setError={setError}
                  onSubmit={signUp}
                  navigate={handleNavigation}
                />
              </View>
              <View style={{width}}>
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
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: Color.white,
    fontFamily: 'Barlow-Bold',
  },
  scrollContainer: {
    flexGrow: 0,
  },
});
