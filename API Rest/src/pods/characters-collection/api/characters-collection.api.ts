import { Character, Info } from './characters-collection.api-model';
import { mockCharacterCollection } from './characters-collection.mock-data';

let charactersCollection = Object.assign({}, mockCharacterCollection);

export const getCharactersCollection = async (): Promise<Info<Character[]>> => {
  return charactersCollection;
};

/* export const deleteHotel = async (id: string): Promise<boolean> => {
  hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
}; */
