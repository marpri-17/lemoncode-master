import { Character, CharacterEntityVm } from '../../common/models';

export const mapFromApiToVm = (character: Character): CharacterEntityVm => ({
  id: character.id,
  /* picture: `${process.env.BASE_PICTURES_URL}/${hotel.thumbNailUrl}`, */
  picture: character.image,
  name: character.name,
  gender: character.gender,
  location: character.location,
  species: character.species,
  status: character.status,
});
