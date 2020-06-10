import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import Color from 'util/Color';
import StateList from './StateList';

function Header({state, setState}) {
  const [listVisible, setListVisible] = useState(false);

  const today = moment().format('MMMM Do');

  const handleStatePress = ({abbr, name}) => {
    setState({shortName: abbr, longName: name});
    setListVisible(false);
  };

  return (
    <View style={styles.root}>
      <StateList
        visible={listVisible}
        onPress={handleStatePress}
        onClose={() => setListVisible(false)}
      />

      <TouchableOpacity onPress={() => setListVisible(true)}>
        <View style={styles.stateContainer}>
          <Icon
            style={styles.pin}
            name="map-pin"
            color={Color.dark}
            size={24}
          />
          <Text style={[styles.state, styles.heading]}>{state.longName}</Text>
        </View>
      </TouchableOpacity>

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
