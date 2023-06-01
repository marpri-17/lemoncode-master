import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  picture: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  location: character.location,
});

/*  export const mapHotelFromVmToApi = (hotel: viewModel.Hotel): apiModel.Hotel =>
  (({
    ...hotel,
    id: hotel.id,
    name: hotel.name,
    shortDescription: hotel.description,
    hotelRating: hotel.rating,
    address1: hotel.address,
    city: hotel.city,
  } as unknown) as apiModel.Hotel); */
