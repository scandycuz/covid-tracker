import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Color from 'util/Color';

function IconButton({name, onPress, border}) {
  const containerStyles = border
    ? [styles.container, styles.border]
    : [styles.container];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyles}>
        <Icon style={styles.icon} name={name} color={Color.dark} size={32} />
      </View>
    </TouchableOpacity>
  );
}

IconButton.defaultProps = {
  border: false,
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  border: {
    borderWidth: 3,
    borderColor: Color.dark,
  },
  icon: {
    marginTop: 2,
  },
});
