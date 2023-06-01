import * as React from 'react';
import { CharacterEntityVm } from '../../common/models';
import { getMockedCharacterCollectionAPIRestAxios } from './api';
import { mapToCustomCharacterViewModel } from './custom-characters.mapper';
import { mapToCollection } from '../../common/mappers';

export const useCustomCharacters = () => {
  const [characterCollection, setCharactersCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = async () => {
    // AXIOS
    const characterCollectionInfo =
      await getMockedCharacterCollectionAPIRestAxios();
    const characterCollection = characterCollectionInfo.results;
    setCharactersCollection(
      mapToCollection(characterCollection, mapToCustomCharacterViewModel)
    );
  };

  return { characterCollection, loadCharacterCollection };
};
