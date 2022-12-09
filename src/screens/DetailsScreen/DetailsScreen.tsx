/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef } from 'react';
import { Text, View, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import LinearGradientComponent from 'src/components/LinearGradient';
import { ROUTES } from 'src/navigation/Routes';
import {
  HomeStackNavProps,
  useHomeNavigation,
} from 'src/navigation/useTypedNavigation';
import styles from './DetailsScreen.styles';
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsScreen: FC<HomeStackNavProps<ROUTES.Details>> = ({ route }) => {
  const { item } = route.params;
  const navigation = useHomeNavigation();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <SharedElement id={`item.${item.image_id}.photo`}>
        <FastImage
          style={{ width: '100%', height: 300 }}
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
            color="black"
            onPress={() => console.log('hello')}
          />
        </View>
        <View style={styles.favIcon}>
          <Icon
            size={18}
            name="heart-o"
            type="font-awesome"
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
      </Animated.View>
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: '900',
              width: '80%',
            }}>
            {item.artist_title}
          </Text>
          <Text style={{ color: 'grey' }}>{item.date_display}</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>
          {item.artwork_type_title}
        </Text>
        <Text style={{ color: 'white', paddingTop: 32 }}>Dimensions:</Text>
        <Text style={{ color: 'white', paddingTop: 6 }}>{item.dimensions}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          width: '100%',
          height: 50,
          justifyContent: 'center',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#af2489',
            height: '100%',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: 16,
            }}>
            Add to favorites
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
