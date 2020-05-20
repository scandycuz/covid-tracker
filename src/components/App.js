import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Login from 'components/Login';
import Signup from 'containers/Signup';
import Home from 'containers/Home';

const Stack = createStackNavigator();

function App({user, initializing, handleAuthChange}) {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthChange);
    return subscriber;
  }, [handleAuthChange]);

  if (initializing) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        {user ? (
          <Stack.Navigator initialRouteName={'Home'} headerMode="none">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName={'Signup'} headerMode="none">
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{gestureDirection: 'horizontal'}}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{gestureDirection: 'horizontal-inverted'}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}

export default App;
