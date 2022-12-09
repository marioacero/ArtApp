import React, { FC } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { COLORS } from 'src/utils/colors';

import { LoadingProps } from './Loading.interface';
import styles from './Loading.styles';

const IOLoading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Modal visible={isLoading} transparent={true}>
      <View style={styles.container}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size={'large'} color={COLORS.white} />
        </View>
      </View>
    </Modal>
  );
};

export default IOLoading;
