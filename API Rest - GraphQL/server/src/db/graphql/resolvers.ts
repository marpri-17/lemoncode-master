import { Character } from '../models';
import { getCharactersList } from '../db';

export const resolvers = {
  Query: {
    charactersList: async (): Promise<Character[]> =>
      await getCharactersList() /* {
      const hotels = await getCharactersList();
      return hotels;
    }, */,
  },
};
