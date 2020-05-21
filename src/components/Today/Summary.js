import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'components/core/Text';
import Color from 'util/Color';

function Summary({positiveTestRatioChange, totalTestRatioChange}) {
  return (
    <View style={styles.root}>
      {positiveTestRatioChange - totalTestRatioChange < -0.15 ? (
        <Text style={styles.summary}>
          The current trend is <Text style={styles.good}>improving</Text>
        </Text>
      ) : positiveTestRatioChange - totalTestRatioChange < 0 ? (
        <Text style={styles.summary}>
          The current trend is <Text style={styles.moderate}>stabilizing</Text>
        </Text>
      ) : (
        <Text style={styles.summary}>
          The current trend is <Text style={styles.bad}>deteriorating</Text>
        </Text>
      )}
    </View>
  );
}

export default Summary;

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  summary: {
    fontSize: 20,
    textAlign: 'center',
    color: Color.dark,
  },
  good: {
    fontFamily: 'FiraSans-SemiBold',
    color: Color.ok.dark,
  },
  moderate: {
    fontFamily: 'FiraSans-SemiBold',
    color: Color.disabled,
  },
  bad: {
    fontFamily: 'FiraSans-SemiBold',
    color: Color.warning.dark,
  },
});
