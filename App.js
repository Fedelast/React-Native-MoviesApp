import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Navigation } from './src/Navigation/Navigation';


export const App = () => {
  return (
  
      <NavigationContainer>

        <Navigation/>

      </NavigationContainer>
  )
}
