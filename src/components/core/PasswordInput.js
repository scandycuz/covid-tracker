import React, {useState, forwardRef} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Color from 'util/Color';

const PasswordInput = forwardRef((props, ref) => {
  const [hidden, setHidden] = useState(true);

  const handlePress = () => {
    setHidden(current => !current);
  };

  return (
    <View style={styles.root}>
      <TextInput
        ref={ref}
        style={styles.input}
        {...props}
        secureTextEntry={hidden}
      />

      <TouchableOpacity onPress={handlePress}>
        <Icon name={hidden ? 'eye' : 'eye-off'} size={32} color={Color.dark} />
      </TouchableOpacity>
    </View>
  );
});

export default PasswordInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    borderRadius: 16,
    backgroundColor: Color.white,
  },
  input: {
    flex: 6,
    fontSize: 24,
    fontFamily: 'FiraSans-Light',
  },
});
