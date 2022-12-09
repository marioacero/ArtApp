import { Icon } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { useTranslate } from 'src/i18n/useTranslate';
import { ROUTES } from 'src/navigation/Routes';
import { useHomeNavigation } from 'src/navigation/useTypedNavigation';
import { COLORS } from 'src/utils/colors';
import styles from './HomeScreen.styles';

const HomeHeader = () => {
  const { t } = useTranslate();
  const navigation = useHomeNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{t('home_title')}</Text>
      <View style={styles.favContainer}>
        <Icon
          size={26}
          name="heart-o"
          type="font-awesome"
          color={COLORS.white}
          onPress={() => navigation.navigate(ROUTES.Favorites)}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
