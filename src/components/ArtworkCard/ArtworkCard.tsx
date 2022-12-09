/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradientComponent from '../LinearGradient';
import { ArtworkProperties } from './ArtworkCard.interface';
import styles from './ArtworkCard.styles';
import { SharedElement } from 'react-navigation-shared-element';
import { ImageSize } from 'src/domain/models/ImageSize';
import { useFavoritesContext } from 'src/hooks/useFavorites';
import { Icon } from '@rneui/themed';
import { COLORS } from 'src/utils/colors';

const ArtworkCard: FC<ArtworkProperties> = ({
  item,
  index,
  onPress,
  whitFavIcon,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { state } = useFavoritesContext();
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  let imgSize = useRef<ImageSize>({ width: 0, height: 0 }).current;

  const checkIfFavorite = () => {
    const isFound = state.items.some(element => {
      return element.id === item.id;
    });
    setIsFavorite(isFound);
  };

  const openDetails = () => {
    onPress(item, imgSize);
  };

  useEffect(() => {
    checkIfFavorite();
  }, [state]);

  return (
    <TouchableOpacity
      style={styles({ index, randomBool }).container}
      onPress={openDetails}>
      <SharedElement id={`item.${item.image_id}.photo`}>
        {isFavorite && whitFavIcon ? (
          <View style={styles().favContainer}>
            <Icon
              size={20}
              name={isFavorite ? 'heart' : 'heart-o'}
              type="font-awesome"
              color={isFavorite ? COLORS.favActive : COLORS.black}
            />
          </View>
        ) : null}
        <FastImage
          style={styles().imgSize}
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
            priority: FastImage.priority.normal,
          }}
          onLoad={e => {
            imgSize = {
              width: e.nativeEvent.width,
              height: e.nativeEvent.height,
            };
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
