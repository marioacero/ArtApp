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
import { SafeAreaView, Text } from 'react-native';
import { useTranslate } from 'src/i18n/useTranslate';

const App = () => {
  const { t } = useTranslate();
  return (
    <SafeAreaView>
      <Text>{t('app_title')}</Text>
    </SafeAreaView>
  );
};

export default App;
