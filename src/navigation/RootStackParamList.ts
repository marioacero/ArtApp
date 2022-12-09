import { ArtWork } from 'src/domain/models/Artwork';
import { ROUTES } from './Routes';

export type RootStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Details]: {
    item: ArtWork;
  };
};
