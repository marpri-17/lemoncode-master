import { IMusicGalleryItem } from './gallery.model';

const MOCK_SERVER_USER_MUSIC_GALLERY: IMusicGalleryItem[] = [
  {
    id: 1,
    album: 'Agila',
    band: 'Extremoduro',
    picture: 'agila_extremoduro.jpg',
  },
  {
    id: 2,
    album: 'Billy Talent',
    band: 'Billy Talent',
    picture: 'Billy_Talent_album.jpg',
  },
  {
    id: 3,
    album: 'Sempiternal',
    band: 'Bring Me The Horizon',
    picture: 'BMTH_Sempiternal.png',
  },
  {
    id: 4,
    album: "Pronounced Leh'nerd Skin'nerd",
    band: 'Lynyrd Skynyrd',
    picture: 'pronounced_lynyrd_skynyrd.jpg',
  },
  {
    id: 5,
    album: 'Hybrid Theory',
    band: 'Linkin Park',
    picture: 'Linkin_Park_Hybrid_Theory_Album_Cover.jpg',
  },
  {
    id: 6,
    album: 'Master of Puppets',
    band: 'Metallica',
    picture: 'Metallica_Master_of_Puppets.jpg',
  },
  {
    id: 7,
    album: 'Never Mind the Bollocks',
    band: 'Sex Pistols',
    picture: 'Never_Mind_the_Bollocks_Sex_Pistols.png',
  },
  {
    id: 8,
    album: 'All We Know Is Falling',
    band: 'Paramore',
    picture: 'Paramore_All_We_Know_Is_Falling.png',
  },
  {
    id: 9,
    album: 'London Calling',
    band: 'The Clash',
    picture: 'LondonCalling_TheClash.jpg',
  },
  {
    id: 10,
    album: 'The Wall',
    band: 'Pink Floyd',
    picture: 'theWall_PinkFloyd.jpg',
  },
];

export const getUserFavoritesAlbumsMock = (): IMusicGalleryItem[] => {
  return MOCK_SERVER_USER_MUSIC_GALLERY.map((album) => {
    const localAssetsRoute = 'assets/images/gallery-albums';
    return { ...album, ...{ picture: `${localAssetsRoute}/${album.picture}` } };
  });
};
