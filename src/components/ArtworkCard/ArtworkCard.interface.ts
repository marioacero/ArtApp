import { ArtWork } from 'src/domain/models/Artwork';

export interface ArtworkProperties {
  item: ArtWork;
  index: number;
  onPress: (item: ArtWork) => void;
}
