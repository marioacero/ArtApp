import { ArtWork } from 'src/domain/models/Artwork';
import { ImageSize } from 'src/domain/models/ImageSize';

export interface ArtworkProperties {
  item: ArtWork;
  index: number;
  onPress: (item: ArtWork, imgSize: ImageSize) => void;
  whitFavIcon: boolean;
}
