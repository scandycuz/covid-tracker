import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import Color from 'util/Color';

function Header({state}) {
  const today = moment().format('MMMM Do');

  return (
    <View style={styles.root}>
      <View style={styles.stateContainer}>
        <Icon style={styles.pin} name="map-pin" size={24} color={Color.dark} />
        <Text style={[styles.state, styles.heading]}>{state.longName}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Icon
          style={styles.calendar}
          name="calendar"
          size={24}
          color={Color.dark}
        />
        <Text style={[styles.heading, styles.date]}>{today}</Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderBottomWidth: 1,
    borderBottomColor: Color.light,
  },
  heading: {
    color: Color.dark,
  },
  stateContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  state: {
    textAlign: 'left',
    fontSize: 26,
  },
  pin: {
    marginRight: 6,
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  date: {
    textAlign: 'right',
    fontSize: 24,
  },
  calendar: {
    marginRight: 6,
  },
});
