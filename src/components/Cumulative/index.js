import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import Header from 'containers/Header';
import Number from 'util/Number';
import Color from 'util/Color';
import NoData from '../NoData';
import Results from './Results';
import Chart from './Chart';

function Today({state, daily}) {
  const current = daily[0];

  if (!current.totalTestResultsIncrease) return <NoData state={state} />;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Header />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Cumulative</Text>
          </View>

          <View style={styles.item}>
            <Results label="Positive Tests" total={current.positive} />
            <Chart
              days={daily.map(attribute('positive')).reverse()}
              formatYLabel={l => `
                ${Number.toString(Number.round(l, 1000) / 1000)} K`}
            />
          </View>

          <View style={styles.item}>
            <Results label="Total Tests" total={current.totalTestResults} />
            <Chart
              reverse
              days={daily.map(attribute('totalTestResults')).reverse()}
              formatYLabel={l => `
                ${Number.toString(Number.round(l, 1000) / 1000)} K`}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            Last update at{' '}
            {moment(current.dateChecked).format('M/D/YYYY h:mm A')}
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

const attribute = attr => d => d[attr];
