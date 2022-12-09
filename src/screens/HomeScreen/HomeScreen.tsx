import React, { ReactElement, useEffect, useState } from 'react';
import useArtworks from 'src/hooks/queries/useArtworks';
import MasonryList from '@react-native-seoul/masonry-list';
import { ArtWork } from 'src/domain/models/Artwork';
import ArtworkCard from 'src/components/ArtworkCard';
import { SafeAreaView, Text } from 'react-native';
import styles from './HomeScreen.styles';
import { useHomeNavigation } from 'src/navigation/useTypedNavigation';
import { ROUTES } from 'src/navigation/Routes';

const HomeScreen = () => {
  const [response, setResponse] = useState<ArtWork[]>([]);
  const { useFetchItems } = useArtworks();
  const { data, isLoading } = useFetchItems();
  const navigation = useHomeNavigation();

  const Header = () => {
    return (
      <Text
        style={{
          color: '#a5a2a2',
          fontSize: 28,
          fontWeight: '700',
          marginLeft: 16,
        }}>
        Art by Modak!
      </Text>
    );
  };

  const showDetails = (item: ArtWork) => {
    navigation.navigate(ROUTES.Details, { item });
  };

  const renderItem = ({
    item,
    i,
  }: {
    item: ArtWork;
    i: number;
  }): ReactElement => {
    return <ArtworkCard item={item} index={i} onPress={showDetails} />;
  };

  useEffect(() => {
    if (data?.data) {
      setResponse(data.data);
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <MasonryList
        ListHeaderComponent={<Header />}
        style={styles.container}
        data={response}
        keyExtractor={(item: ArtWork): string => `${item.id}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        // refreshing={isLoadingNext}
        // onRefresh={() => refetch({first: ITEM_CNT})}
        // onEndReachedThreshold={0.1}
        // onEndReached={() => loadNext(ITEM_CNT)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
