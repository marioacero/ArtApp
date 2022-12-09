import { logger } from 'src/utils/logger';
import { ArtWorkResponse } from '../models/Artwork';
import Axios from './AxiosConf';

const fetchArtworks = async () => {
  try {
    const response = await Axios.get('artworks');
    return response.data as ArtWorkResponse;
  } catch (err) {
    return logger.error(err, 'Error getting current user');
  }
};

const APIServices = {
  fetchArtworks,
};

export default APIServices;
