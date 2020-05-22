import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from 'util/Color';

function Button({disabled, title, onPress, ...rest}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={disabled ? 1 : undefined}
      onPress={disabled ? undefined : onPress}
      {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Color.white,
    fontSize: 24,
    fontFamily: 'FiraSans-Regular',
  },
});
