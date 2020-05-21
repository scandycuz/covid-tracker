import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Header from 'components/Header';
import Results from './Results';
import Summary from './Summary';

function Today({state, daily}) {
  const today = daily[0];
  const yesterday = daily[1];

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.main}>
        <View>
          <Header state={state} />
        </View>

        <View style={styles.content}>
          <View style={styles.item}>
            <Results
              label="Positive Tests"
              today={today.positiveIncrease}
              yesterday={yesterday.positiveIncrease}
            />
          </View>

          <View style={styles.item}>
            <Results
              reverse
              label="Total Tests"
              today={today.totalTestResultsIncrease}
              yesterday={yesterday.totalTestResultsIncrease}
            />
          </View>

          <View style={styles.item}>
            <Results
              asPercentage
              label="Percentage of Positive Tests"
              today={today.positiveIncrease / today.totalTestResultsIncrease}
              yesterday={
                yesterday.positiveIncrease / yesterday.totalTestResultsIncrease
              }
            />
          </View>

          <View style={styles.summaryContainer}>
            <Summary
              positiveTestRatioChange={
                today.positiveIncrease / yesterday.positiveIncrease
              }
              totalTestRatioChange={
                today.totalTestResultsIncrease /
                yesterday.totalTestResultsIncrease
              }
            />
          </View>
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
  item: {
    marginBottom: 20,
  },
  summaryContainer: {
    marginTop: 10,
  },
});
