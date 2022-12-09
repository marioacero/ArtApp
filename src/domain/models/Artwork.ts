export interface ArtWork {
  id: number;
  title: string;
  image_id: string;
  artist_title: string;
  date_display: string;
  dimensions: string;
  artwork_type_title: string;
}

export interface ArtWorkResponse {
  data: ArtWork[];
  config: Config;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}
