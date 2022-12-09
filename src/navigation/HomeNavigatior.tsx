import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { ROUTES } from './Routes';
import HomeScreen from 'src/screens/HomeScreen';
import DetailsScreen from 'src/screens/DetailsScreen';
import { CardStyleInterpolators } from '@react-navigation/stack';
import FavoritesScreen from 'src/screens/FavoritesScreen';

const Stack = createSharedElementStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.Home}
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },
      headerShown: false,
    }}>
    <Stack.Screen
      name={ROUTES.Home}
      component={HomeScreen}
      options={{
        title: 'Artwork by Modak',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.Favorites}
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={ROUTES.Details}
      component={DetailsScreen}
      sharedElements={route => {
        return [
          {
            id: `item.${route.params.item.image_id}.photo`,
            resize: 'none',
            animation: 'fade',
          },
        ];
      }}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        title: 'Details',
        headerShown: false,
        headerStyle: {
          backgroundColor: 'black',
        },
      }}
    />
  </Stack.Navigator>
);
