import React, { ReactElement, useEffect, useState } from 'react';
import useArtworks from 'src/hooks/queries/useArtworks';
import MasonryList from '@react-native-seoul/masonry-list';
import { ArtWork } from 'src/domain/models/Artwork';
import ArtworkCard from 'src/components/ArtworkCard';
import { SafeAreaView } from 'react-native';
import styles from './HomeScreen.styles';
import { useHomeNavigation } from 'src/navigation/useTypedNavigation';
import { ROUTES } from 'src/navigation/Routes';
import { ImageSize } from 'src/domain/models/ImageSize';
import Loading from 'src/components/Loading';
import HomeHeader from './HomeHeader';

const HomeScreen = () => {
  const [response, setResponse] = useState<ArtWork[]>([]);
  const { useFetchItems } = useArtworks();
  const { data, isLoading } = useFetchItems();
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
        whitFavIcon={true}
      />
    );
  };

  useEffect(() => {
    if (data?.data) {
      setResponse(data.data);
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Loading isLoading={isLoading} />
      <HomeHeader />
      <MasonryList
        style={styles.container}
        data={response}
        keyExtractor={(item: ArtWork): string => `${item.id}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
