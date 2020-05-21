import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import Header from 'components/Header';

function Today({state, daily}) {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.main}>
        <View>
          <Header state={state} />
        </View>

        <View style={styles.content}>
          <Text>Hello World!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Today;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  main: {
    flex: 1,
    width: '100%',
  },
  content: {
    marginTop: 16,
    padding: 16,
    alignItems: 'center',
  },
});
