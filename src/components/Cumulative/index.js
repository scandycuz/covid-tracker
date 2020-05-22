import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import Number from 'util/Number';
import Color from 'util/Color';
import Header from '../Header';
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
          <Header state={state} />

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Total</Text>
          </View>

          <View style={styles.item}>
            <Results
              label="Positive Tests"
              total={current.positive}
              data={daily.map(attribute('positive')).slice(0, 30)}
            />
            <Chart
              days={daily
                .map(attribute('positive'))
                .slice(0, 30)
                .reverse()}
              formatYLabel={l => `
                ${Number.toString(Number.round(l, 1000) / 1000)} K`}
            />
          </View>

          <View style={styles.item}>
            <Results
              label="Total Tests"
              total={current.totalTestResults}
              data={daily.map(attribute('totalTestResults')).slice(0, 30)}
            />
            <Chart
              reverse
              days={daily
                .map(attribute('totalTestResults'))
                .slice(0, 30)
                .reverse()}
              formatYLabel={l => `
                ${Number.toString(Number.round(l, 1000) / 1000)} K`}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            Last update at {current.lastUpdateEt} ET
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
