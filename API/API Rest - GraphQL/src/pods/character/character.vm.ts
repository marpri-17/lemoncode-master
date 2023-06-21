export interface Character {
  id: number;
  picture: string;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  gender: string;
  location: CharacterLocation;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  picture: '',
  name: '',
  status: null,
  species: '',
  gender: '',
  location: {
    name: '',
    url: '',
  },
});
