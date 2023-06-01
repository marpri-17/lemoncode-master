import Axios from 'axios';
import { Character, Info } from './custom-characters-model';

const jsonServerPort = 'localhost:3000';
const baseUrl = `http://${jsonServerPort}/api/character/`;

// AXIOS
export const getMockedCharacterCollectionAPIRestAxios = async () => {
  const axiosCharacterResponse = await Axios.get<Info<Character[]>>(
    `${baseUrl}`
  );
  if (axiosCharacterResponse.status === 200) {
    return axiosCharacterResponse.data;
  }
};
