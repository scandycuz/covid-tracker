import React from 'react';
import {View, ScrollView, SafeAreaView, Text, StyleSheet} from 'react-native';
import Header from '../Header';
import Number from 'util/Number';
import Results from './Results';
import Chart from './Chart';

function Today({state, daily}) {
  const current = daily[0];

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.main}>
        <View>
          <Header state={state} />
        </View>

        <View style={styles.content}>
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
});

const attribute = attr => d => d[attr];
