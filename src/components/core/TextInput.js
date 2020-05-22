import React, {forwardRef} from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';
import Color from 'util/Color';

const TextInput = forwardRef((props, ref) => {
  return <Input ref={ref} style={styles.input} {...props} />;
});

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
