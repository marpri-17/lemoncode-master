export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  url: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  created: string;
}

export interface CharacterLocation {
  name: string;
  url: string;
}
