import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Color from 'util/Color';

function TextInput(props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default TextInput;

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
