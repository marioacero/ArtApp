import { AxiosResponse } from 'axios';
import Axios from './AxiosConf';

const fetchArtworks = async (): Promise<AxiosResponse<any>> => {
  return await Axios.get('artworks');
};

const APIServices = {
  fetchArtworks,
};

export default APIServices;
