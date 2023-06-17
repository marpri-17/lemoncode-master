import {
  CustomCharacterDTO,
  CustomCharacterViewModel,
} from '../../common/models';

/* export const mapCharacterFromApiToVm = (
  character: Character
): CharacterEntityVm => character;
 */

export const mapCustomCharacterFromApiToVm = (
  character: CustomCharacterDTO
): CustomCharacterViewModel => {
  const newCharacterSentences = [...character.sentences];
  delete character.sentences;
  return { ...character, bestSentences: newCharacterSentences };
};
export const createEmptyCustomCharacter = (): CustomCharacterViewModel => ({
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
  bestSentences: [],
});
