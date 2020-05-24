import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Color from 'util/Color';

function Loading({loading}) {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color={Color.purple.dark} />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
