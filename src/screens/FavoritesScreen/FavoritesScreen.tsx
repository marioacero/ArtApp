import React, { ReactElement } from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { ArtWork } from 'src/domain/models/Artwork';
import ArtworkCard from 'src/components/ArtworkCard';
import { SafeAreaView } from 'react-native';
import { useHomeNavigation } from 'src/navigation/useTypedNavigation';
import { ROUTES } from 'src/navigation/Routes';
import { ImageSize } from 'src/domain/models/ImageSize';
import { useFavoritesContext } from 'src/hooks/useFavorites';
import styles from '../HomeScreen/HomeScreen.styles';
import FavoritesHeader from './FavoritesHeader';
import FavEmptyState from 'src/components/FavEmptyState/FavEmptyState';

const FavoritesScreen = () => {
  const { state } = useFavoritesContext();
  const navigation = useHomeNavigation();
  const showDetails = (item: ArtWork, imageSize: ImageSize) => {
    navigation.navigate(ROUTES.Details, { item, imgSize: imageSize });
  };

  const renderItem = ({
    item,
    i,
  }: {
    item: ArtWork;
    i: number;
  }): ReactElement => {
    return (
      <ArtworkCard
        item={item}
        index={i}
        onPress={showDetails}
        whitFavIcon={false}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FavoritesHeader />
      {state.items.length > 0 ? (
        <MasonryList
          style={styles.container}
          data={state.items}
          keyExtractor={(item: ArtWork): string => `${item.id}`}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      ) : (
        <FavEmptyState />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
