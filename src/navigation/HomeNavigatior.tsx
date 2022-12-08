import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './Routes';
import HomeScreen from 'src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
  </Stack.Navigator>
);
