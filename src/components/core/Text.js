import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';

function Text({style, children, ...rest}) {
  return (
    <NativeText style={[styles.title, style]} {...rest}>
      {children}
    </NativeText>
  );
}

Text.defaultProps = {
  style: {},
};

export default Text;

const styles = StyleSheet.create({
  root: {
    fontFamily: 'FiraSans-Regular',
  },
});
