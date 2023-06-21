import Axios from 'axios';
import { Character, Info } from '../../../common/models';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

// FETCH
export const getCharacterCollectionAPIRest = (): Promise<Info<Character[]>> => {
  return fetch(`${baseUrl}`).then((characterCollectionResponse) => {
    if (characterCollectionResponse.ok) {
      return characterCollectionResponse.json();
    } else {
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
