import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Color from 'util/Color';

function PasswordInput(props) {
  const [hidden, setHidden] = useState(true);

  const handlePress = () => {
    setHidden(current => !current);
  };

  return (
    <View style={styles.root}>
      <TextInput style={styles.input} {...props} secureTextEntry={hidden} />

      <TouchableOpacity onPress={handlePress}>
        <Icon name={hidden ? 'eye' : 'eye-off'} size={32} color={Color.dark} />
      </TouchableOpacity>
    </View>
  );
}

export default PasswordInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 24,
    paddingTop: 7,
    paddingBottom: 9,
    borderRadius: 16,
    backgroundColor: Color.white,
  },
  input: {
    flex: 6,
    fontSize: 24,
    fontFamily: 'FiraSans-Light',
  },
});
