/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'src/domain/api/queryClient';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from 'src/navigation/HomeNavigatior';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
