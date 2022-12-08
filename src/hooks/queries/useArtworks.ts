import { useQuery } from '@tanstack/react-query';
import APIServices from 'src/domain/api/Axios';

const useArtworks = () => {
  const { fetchArtworks } = APIServices;
  const useFetchItems = () => {
    return useQuery(['fetchArtworks'], fetchArtworks, {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    });
  };
  return { useFetchItems };
};

export default useArtworks;
