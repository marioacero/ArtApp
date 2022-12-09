import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from 'src/utils/colors';
import { Icon } from '@rneui/themed';
import styles from './FavEmptyState.styles';
import { useTranslate } from 'src/i18n/useTranslate';

const FavEmptyState = () => {
  const { t } = useTranslate();
  return (
    <View style={styles.container}>
      <View>
        <Icon
          size={160}
          name="heart-broken"
          type="font-awesome-5"
          color={COLORS.gray}
        />
      </View>
      <Text style={styles.text}>{t('empty_state')}</Text>
    </View>
  );
};

export default FavEmptyState;
