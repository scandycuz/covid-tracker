import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from 'components/core/Text';
import Number from 'util/Number';
import Color from 'util/Color';

function Results({reverse, asPercentage, label, total}) {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>{label}</Text>
      </View>

      <View>
        <View style={styles.countContainer}>
          <Text style={styles.count}>
            {asPercentage ? Number.toPercentage(total) : Number.toString(total)}
          </Text>
        </View>
      </View>
    </View>
  );
}

Results.defaultProps = {
  reverse: false,
  asPercentage: false,
};

export default Results;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Color.dark,
    textAlign: 'center',
    fontFamily: 'FiraSans-SemiBold',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  count: {
    textAlign: 'center',
    fontSize: 64,
    color: Color.black,
    fontFamily: 'FiraSans-SemiBold',
  },
  positive: {
    color: Color.ok.dark,
  },
  negative: {
    color: Color.warning.dark,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
  },
  arrow: {
    marginRight: 4,
    marginBottom: -3,
  },
});
