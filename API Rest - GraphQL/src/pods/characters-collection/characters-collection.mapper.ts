import * as apiModel from './api/characters-collection.api-model';
import * as viewModel from './characters-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: character.id,
  /* picture: `${process.env.BASE_PICTURES_URL}/${hotel.thumbNailUrl}`, */
  picture: character.image,
  name: character.name,
  gender: character.gender,
  location: character.location,
  species: character.species,
  status: character.status,
});
