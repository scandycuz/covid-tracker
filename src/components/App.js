import React, {useEffect, useCallback} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Home from 'containers/Home';

const Stack = createStackNavigator();

function App({user, initializing, setUser, setInitializing}) {
  // TODO: Replace this with a Saga login function
  const onAuthStateChanged = useCallback(
    u => {
      setUser(u);

      if (initializing) setInitializing(false);
    },
    [initializing, setUser, setInitializing],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

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
