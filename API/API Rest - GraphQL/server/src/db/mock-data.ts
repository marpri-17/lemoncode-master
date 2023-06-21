import { mockedCharactersList } from '../../mock-data/data';
import { Character } from './models';

export const createDefaultCharacter = (): Character => ({
  id: Math.floor(Math.random() * 101),
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [''],
  url: '',
  created: new Date(Date.now()).toISOString(),
});

export const mockCharacters: Character[] = [...mockedCharactersList];
