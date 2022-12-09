import { Icon } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import { useTranslate } from 'src/i18n/useTranslate';
import { useHomeNavigation } from 'src/navigation/useTypedNavigation';
import { COLORS } from 'src/utils/colors';
import styles from '../HomeScreen/HomeScreen.styles';

const FavoritesHeader = () => {
  const navigation = useHomeNavigation();
  const { t } = useTranslate();
  return (
    <>
      <View style={styles.favHeaderContainer}>
        <View style={styles.backIcon}>
          <Icon
            size={26}
            name="arrow-back"
            type="ionicons"
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.title}>{t('favorites')}</Text>
      </View>
    </>
  );
};

export default FavoritesHeader;
