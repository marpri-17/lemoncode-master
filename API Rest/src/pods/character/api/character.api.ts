import Axios from 'axios';
import { Character } from '../../../common/models';
import { mockCharacter } from './character.mock-data';

const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterMocked = (): Character => {
  return mockCharacter;
};

// FETCH
export const getCharacterAPIRest = (id: string): Promise<Character> => {
  return fetch(`${baseUrl}/${id}`).then((characterResponse) => {
    if (characterResponse.ok) {
      return characterResponse.json();
    } else {
      // TEST
      throw Error();
    }
  });
};

// AXIOS
export const getCharacterAPIRestAxios = async (id: string) => {
  const axiosCharacterResponse = await Axios.get<Character>(`${baseUrl}/${id}`);
  if (axiosCharacterResponse.status === 200) {
    return axiosCharacterResponse.data;
  }
};

/* export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  return true;
}; */
