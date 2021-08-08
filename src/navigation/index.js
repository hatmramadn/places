import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {routeNames} from '../constants';
import {Login, Register} from '../screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={routeNames.login} component={Login} />
        <Stack.Screen name={routeNames.register} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
