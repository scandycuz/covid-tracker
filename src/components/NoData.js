import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Color from 'util/Color';
import Header from './Header';

function NoData({state}) {
  return (
    <SafeAreaView style={styles.root}>
      <Header state={state} />

      <View style={styles.container}>
        <Text style={styles.noData}>No data available for your state</Text>
      </View>
    </SafeAreaView>
  );
}

export default NoData;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  noData: {
    textAlign: 'center',
    fontSize: 20,
    color: Color.disabled,
  },
});
