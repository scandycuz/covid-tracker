import React, {useEffect} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import Auth from 'containers/Auth';
import Home from 'containers/Home';
import Loading from './Loading';

function App({user, initializing, handleAuthChange}) {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthChange);
    return subscriber;
  }, [handleAuthChange]);

  if (initializing) return <Loading />;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {user ? <Home /> : <Auth />}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
