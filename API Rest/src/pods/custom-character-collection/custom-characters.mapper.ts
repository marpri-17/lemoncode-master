import {
  Character,
  CustomCharacterDTO,
  CustomCharacterViewModel,
} from '../../common/models';

export const mapCharacterDTOtoCustomDTO = (
  character: Character | CustomCharacterDTO
): CustomCharacterDTO => ({
  ...character,
  sentences: 'sentences' in character ? [...character.sentences] : [],
});

export const mapCharacterDTOtoCustomVM = (
  character: Character
): CustomCharacterViewModel => {
  const customCharacterDTO = mapCharacterDTOtoCustomDTO(character);
  return {
    ...customCharacterDTO,
    bestSentences: [...customCharacterDTO.sentences],
  };
};

export const mapCustomCharacterVMtoDTO = (
  character: CustomCharacterViewModel
): CustomCharacterDTO => {
  const sentences = [...character.bestSentences];
  delete character.bestSentences;
  return {
    ...character,
    sentences,
  };
};

const getGenderTypes = (
  gender: string
): 'unknown' | 'Female' | 'Male' | 'Genderless' => {
  switch (gender.toLowerCase().trim()) {
    case 'unknown':
      return 'unknown';
    case 'female':
      return 'Female';
    case 'male':
      return 'Male';
    case 'genderless':
      return 'Genderless';

    default:
      return null;
  }
};
