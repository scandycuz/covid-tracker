import React, {useEffect, useCallback} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Home from 'components/Home';

const Stack = createStackNavigator();

function App({user, initializing, setUser, setInitializing}) {
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
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator
        headerMode="none"
        initialRouteName={user ? 'Home' : 'Signup'}>
        <Stack.Screen
          name="Signup"
          options={{
            gestureDirection: 'horizontal',
          }}
          component={Signup}
        />

        <Stack.Screen
          name="Login"
          options={{
            gestureDirection: 'horizontal-inverted',
          }}
          component={Login}
        />

        <Stack.Screen name="Home" component={Home} initialParams={{user}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
