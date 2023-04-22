import { CharacterLocation } from './api';

export interface CharacterEntityVm {
  id: number;
  picture: string;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  gender: string;
  location: CharacterLocation;
}
