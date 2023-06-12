import Axios from 'axios';
import { Info, CustomCharacterDTO } from '../../../common/models';

const jsonServerPort = 'localhost:3000';
const baseUrl = `http://${jsonServerPort}/api/characters/`;

// AXIOS
export const getMockedCharacterCollectionAPIRestAxios = async () => {
  const axiosCharacterResponse = await Axios.get<Info<CustomCharacterDTO[]>>(
    `${baseUrl}`
  );
  if (axiosCharacterResponse.status === 200) {
    return axiosCharacterResponse.data;
  }
};

export const saveBestSentences = async (character: CustomCharacterDTO) => {
  const sentSentence = await Axios.post(
    `${baseUrl}${character.id}/`,
    character,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  if (sentSentence.status === 200) {
    return sentSentence.data;
  } else {
    throw new Error('Something were wrong');
  }
};
