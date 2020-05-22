import React, {useEffect} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Auth from 'containers/Auth';
import Home from 'containers/Home';

function App({user, initializing, handleAuthChange}) {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthChange);
    return subscriber;
  }, [handleAuthChange]);

  if (initializing) return null;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>{user ? <Home /> : <Auth />}</NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
