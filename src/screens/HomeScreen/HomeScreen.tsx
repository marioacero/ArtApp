import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTranslate } from 'src/i18n/useTranslate';

const HomeScreen = () => {
  const { t } = useTranslate();
  return (
    <SafeAreaView>
      <Text>{t('app_title')}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
