import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from 'util/Color';

function Home({route}) {
  const {user} = route.params;

  return (
    <View style={styles.root}>
      <LinearGradient
        style={styles.gradient}
        colors={[Color.ok.dark, Color.ok.light]}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome {user.email}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Home;

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
    paddingBottom: 112,
  },
  title: {
    fontSize: 25,
    color: Color.white,
  },
});
