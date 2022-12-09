import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'src/domain/api/queryClient';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from 'src/navigation/HomeNavigatior';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from 'src/domain/state/favoritesContext';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <NavigationContainer>
            <HomeStack />
          </NavigationContainer>
        </FavoritesProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
