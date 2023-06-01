import { CharacterEntityVm, Character } from '../../common/models';

export const mapToCustomCharacterViewModel = (
  character: Character
): CharacterEntityVm => ({
  //TODO - types and mappers
  id: character.id,
  /* picture: `${process.env.BASE_PICTURES_URL}/${hotel.thumbNailUrl}`, */
  picture: character.image,
  name: character.name,
  gender: character.gender,
  location: character.location,
  species: character.species,
  status: character.status,
});
