/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef, useState } from 'react';
import { Text, View, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import LinearGradientComponent from 'src/components/LinearGradient';
import { ROUTES } from 'src/navigation/Routes';
import { HomeStackNavProps } from 'src/navigation/useTypedNavigation';
import { styles, imgStyles } from './DetailsScreen.styles';
import { Icon } from '@rneui/themed';
import ArtButton from 'src/components/ArtButton';
import { useFavoritesContext } from 'src/hooks/useFavorites';
import { COLORS } from 'src/utils/colors';
import { useTranslate } from 'src/i18n/useTranslate';

const DetailsScreen: FC<HomeStackNavProps<ROUTES.Details>> = ({
  route,
  navigation,
}) => {
  const { item, imgSize } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const { state, updateStateFavItems } = useFavoritesContext();
  const { t } = useTranslate();

  const checkIfFavorite = () => {
    const isFound = state.items.some(element => {
      return element.id === item.id;
    });
    setIsFavorite(isFound);
  };

  const onPressFavorite = () => {
    let favorites = state.items;
    if (isFavorite) {
      favorites = favorites.filter(fav => {
        return fav.id !== item.id;
      });
    } else {
      favorites.push(item);
    }
    updateStateFavItems(favorites);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    checkIfFavorite();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <SharedElement id={`item.${item.image_id}.photo`}>
        <FastImage
          style={imgStyles(imgSize).image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <LinearGradientComponent>
            <Text style={styles.title}>{item.title}</Text>
          </LinearGradientComponent>
        </FastImage>
      </SharedElement>
      <Animated.View style={[styles.iconsContainer, { opacity: opacity }]}>
        <View style={styles.closeIcon}>
          <Icon
            size={20}
            name="close"
            type="Ionicons"
            color={COLORS.black}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.favIcon}>
          <Icon
            size={20}
            name={isFavorite ? 'heart' : 'heart-o'}
            type="font-awesome"
            color={isFavorite ? COLORS.favActive : COLORS.black}
            onPress={onPressFavorite}
          />
        </View>
      </Animated.View>
      <Animated.View style={[styles.contentContainer, { opacity: opacity }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.artist}>{item.artist_title}</Text>
          <Text style={styles.year}>{item.date_display}</Text>
        </View>
        <Text style={styles.artType}>{item.artwork_type_title}</Text>
        <Text style={styles.dimensions}>{t('dimensions')}</Text>
        <Text style={styles.dimensionsValue}>{item.dimensions}</Text>
      </Animated.View>
      {!isFavorite ? (
        <ArtButton title={t('add_favorites')} onPress={onPressFavorite} />
      ) : null}
    </View>
  );
};

export default DetailsScreen;
