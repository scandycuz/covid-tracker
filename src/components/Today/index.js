import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Text from 'components/core/Text';
import Header from '../Header';
import Results from './Results';

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
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Today</Text>
          </View>

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
              label="Positive Test Percentage"
              today={today.positiveIncrease / today.totalTestResultsIncrease}
              yesterday={
                yesterday.positiveIncrease / yesterday.totalTestResultsIncrease
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
    marginTop: 8,
    padding: 16,
    alignItems: 'center',
  },
  headingContainer: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'FiraSans-light',
  },
  item: {
    marginBottom: 20,
  },
  summaryContainer: {
    marginTop: 10,
  },
});
