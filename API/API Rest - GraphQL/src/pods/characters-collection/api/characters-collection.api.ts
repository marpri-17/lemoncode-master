import Axios from 'axios';
import { Character, Info } from './characters-collection.api-model';
import { mockCharacterCollection } from './characters-collection.mock-data';

let charactersCollection = Object.assign({}, mockCharacterCollection);

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharactersCollectionMocked = async (): Promise<
  Info<Character[]>
> => {
  return charactersCollection;
};

// FETCH
export const getCharacterCollectionAPIRest = (): Promise<Info<Character[]>> => {
  return fetch(`${baseUrl}`).then((characterCollectionResponse) => {
    if (characterCollectionResponse.ok) {
      return characterCollectionResponse.json();
    } else {
      // TEST
      throw Error();
    }
  });
};

// AXIOS
export const getCharacterCollectionAPIRestAxios = async () => {
  const axiosCharacterResponse = await Axios.get<Info<Character[]>>(
    `${baseUrl}`
  );
  if (axiosCharacterResponse.status === 200) {
    return axiosCharacterResponse.data;
  }
};

/* export const deleteHotel = async (id: string): Promise<boolean> => {
  hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
}; */
