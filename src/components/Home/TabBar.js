import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Color from 'util/Color';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.root}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <View style={styles.icon}>
              {options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? Color.link : Color.dark,
                size: 24,
              })}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  icon: {
    marginBottom: 4,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  label: {
    color: Color.dark,
    fontSize: 16,
  },
  focused: {
    color: Color.link,
  },
});
