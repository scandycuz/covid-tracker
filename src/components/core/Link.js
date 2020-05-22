import React from 'react';
import {StyleSheet} from 'react-native';
import Text from 'components/core/Text';

function Link({style, children, onPress, ...rest}) {
  return (
    <Text style={[styles.title, style]} onPress={onPress} {...rest}>
      {children}
    </Text>
  );
}

Link.defaultProps = {
  style: {},
};

export default Link;

const styles = StyleSheet.create({
  title: {
    textDecorationLine: 'underline',
  },
});
