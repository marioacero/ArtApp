import { ArtWork } from 'src/domain/models/Artwork';
import { ImageSize } from 'src/domain/models/ImageSize';
import { ROUTES } from './Routes';

export type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Details]: {
    item: ArtWork;
    imgSize: ImageSize;
  };
  [ROUTES.Favorites]: undefined;
};
