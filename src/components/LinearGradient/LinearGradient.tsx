import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from 'src/utils/colors';
import { LinearGradientProperties } from './LinearGradient.interface';
import styles from './LinearGradient.style';

const LinearGradientComponent: FC<LinearGradientProperties> = ({
  children,
}) => {
  const colors = [COLORS.gradientTopCard, COLORS.gradientBottomCard];
  return (
    <LinearGradient colors={colors.reverse()} style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientComponent;
