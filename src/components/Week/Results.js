import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Text from 'components/core/Text';
import Number from 'util/Number';
import Color from 'util/Color';

function Results({reverse, asPercentage, label, today, yesterday}) {
  const isLess = today < yesterday;
  const improving = reverse ? !isLess : isLess;

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>{label}</Text>
      </View>

      <View>
        <View style={styles.countContainer}>
          <Text
            style={[
              styles.count,
              improving ? styles.positive : styles.negative,
            ]}>
            {asPercentage ? Number.toPercentage(today) : Number.toString(today)}
          </Text>
        </View>

        <View style={styles.subtitleContainer}>
          <View style={styles.arrow}>
            <Icon
              size={20}
              name={isLess ? 'arrow-down-right' : 'arrow-up-right'}
              color={improving ? Color.ok.dark : Color.warning.dark}
            />
          </View>
          <Text
            style={[
              styles.subtitle,
              improving ? styles.positive : styles.negative,
            ]}>
            {asPercentage
              ? Number.toPercentage(Math.abs(today - yesterday))
              : Number.toString(Math.abs(today - yesterday))}{' '}
            {isLess ? 'less' : 'higher'} than yesterday
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
