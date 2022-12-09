import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArtButtonProperties } from './ArtButton.interface';
import styles from './ArtButton.styles';

const ArtButton: FC<ArtButtonProperties> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArtButton;
