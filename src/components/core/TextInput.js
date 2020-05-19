import React from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';
import Color from 'util/Color';

function TextInput(props) {
  return <Input style={styles.input} {...props} />;
}

export default TextInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    paddingTop: 17,
    paddingBottom: 15,
    borderRadius: 16,
    backgroundColor: Color.white,
    fontSize: 24,
    fontFamily: 'FiraSans-Light',
  },
});
