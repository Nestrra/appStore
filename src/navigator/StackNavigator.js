import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { DetailScreen } from '../screen/DetailScreen';
import { HomeScreen } from '../screen/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator =()=> {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />     
    </Stack.Navigator>
  );
}