import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { DetailScreen } from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export const Navigation = ()=> {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown:false,
          cardStyle:{backgroundColor:'black'}
        }
      }
    >

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detailscreen" component={DetailScreen} />
      
    </Stack.Navigator>
  );
}