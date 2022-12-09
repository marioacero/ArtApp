import React, { FC, memo, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradientComponent from '../LinearGradient';
import { ArtworkProperties } from './ArtworkCard.interface';
import styles from './ArtworkCard.styles';
import { SharedElement } from 'react-navigation-shared-element';

const ArtworkCard: FC<ArtworkProperties> = ({ item, index, onPress }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  const openDetails = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity
      style={styles({ index, randomBool }).container}
      onPress={openDetails}>
      <SharedElement id={`item.${item.image_id}.photo`}>
        <FastImage
          style={styles().imgSize}
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <LinearGradientComponent>
            <Text style={styles().title} numberOfLines={1}>
              {item.title}
            </Text>
          </LinearGradientComponent>
        </FastImage>
      </SharedElement>
    </TouchableOpacity>
  );
};

export default memo(ArtworkCard);
