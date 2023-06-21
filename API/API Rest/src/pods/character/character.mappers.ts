import { Character, CharacterEntityVm } from '../../common/models';

export const mapCharacterFromApiToVm = (
  character: Character
): CharacterEntityVm => character;

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: 0,
  image: '',
  name: '',
  status: null,
  species: '',
  gender: null,
  location: {
    name: '',
    url: '',
  },
  created: '',
  episode: [],
  origin: {
    name: '',
    url: '',
  },
  type: '',
  url: '',
});
