import { Character } from './character.api-model';
import { mockCities, mockCharacter } from './character.mock-data';

export const getCharacter = (): Character => {
  return mockCharacter;
};

/* export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  return true;
}; */
