import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Text from 'components/core/Text';
import Color from 'util/Color';
import Header from '../Header';
import NoData from '../NoData';
import Results from './Results';

function Today({state, daily}) {
  const today = daily[0];
  const yesterday = daily[1];

  if (!today.totalTestResultsIncrease) return <NoData state={state} />;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Header state={state} />

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

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            Last update at {today.lastUpdateEt} ET
          </Text>
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
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  headingContainer: {
    marginTop: 8,
    padding: 16,
  },
  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'FiraSans-light',
  },
  item: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  footer: {
    padding: 16,
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 16,
    color: Color.disabled,
  },
});
