import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import IconButton from 'components/core/IconButton';
import Color from 'util/Color';
import {STATES} from 'util/constants';

function StateList({visible, onPress, onClose}) {
  return (
    <Modal style={styles.root} animationType="slide" visible={visible}>
      <View style={styles.closeContainer}>
        <IconButton name="x" onPress={onClose} />
      </View>

      <FlatList
        data={STATES}
        initialNumToRender={36}
        renderItem={({item: {abbr, name}, index}) => (
          <TouchableOpacity onPress={() => onPress({abbr, name})}>
            <View style={styles.item}>
              <Text style={styles.name}>{name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Modal>
  );
}

export default StateList;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Color.white,
  },
  item: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
  },
  closeContainer: {
    position: 'absolute',
    zIndex: 100,
    top: 42,
    right: 16,
  },
});
