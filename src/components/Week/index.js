import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import moment from 'moment';
import Text from 'components/core/Text';
import Header from 'containers/Header';
import Color from 'util/Color';
import Results from './Results';

function Week({state, daily}) {
  const curr = daily.slice(0, 7);
  const prior = daily.slice(7, 14);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Header />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>7 Day Running Average</Text>
          </View>

          <View style={styles.item}>
            <Results
              label="Positive Tests"
              current={parseInt(
                avg(curr.map(attribute('positiveIncrease'))),
                10,
              )}
              prior={parseInt(
                avg(prior.map(attribute('positiveIncrease'))),
                10,
              )}
            />
          </View>

          <View style={styles.item}>
            <Results
              reverse
              label="Total Tests"
              current={parseInt(
                avg(curr.map(attribute('totalTestResultsIncrease'))),
                10,
              )}
              prior={parseInt(
                avg(prior.map(attribute('totalTestResultsIncrease'))),
                10,
              )}
            />
          </View>

          <View style={styles.item}>
            <Results
              asPercentage
              label="Positive Test Percentage"
              current={avg(curr.map(ratio))}
              prior={avg(prior.map(ratio))}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            Last update at{' '}
            {moment(curr[0].dateChecked).format('M/D/YYYY h:mm A')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Week;

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

const attribute = attr => d => d[attr];

const ratio = d => {
  if (!d.totalTestResultsIncrease) return 0;

  return d.positiveIncrease / d.totalTestResultsIncrease;
};

function avg(arr) {
  const sum = arr.reduce((c, num, nums) => {
    c += num;

    return c;
  }, 0);

  return sum / arr.length;
}
