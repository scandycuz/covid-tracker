import React, {useEffect} from 'react';
import {AppState, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Today from 'containers/Today';
import Week from 'containers/Week';
import Cumulative from 'containers/Cumulative';
import Loading from '../Loading';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

function Home({loading, getState}) {
  useEffect(() => {
    getState();

    AppState.addEventListener('change', getState);

    return () => {
      AppState.removeEventListener('change', getState);
    };
  }, [getState]);

  if (loading) return <Loading loading={loading} />;

  return (
    <View style={styles.root}>
      <Tab.Navigator
        initialRouteName="Today"
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Week"
          component={Week}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="activity" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cumulative"
          component={Cumulative}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bar-chart-2" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
});
