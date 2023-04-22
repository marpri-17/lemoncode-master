export interface IMusicGalleryItem {
  id: number;
  band: string;
  album: string;
  picture: string;
}

export interface IMusicGalleryItemViewModel extends IMusicGalleryItem {
  selected: boolean;
}
