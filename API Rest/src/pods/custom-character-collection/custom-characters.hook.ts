import * as React from 'react';
import { CharacterEntityVm } from '../../common/models';
import { getMockedCharacterCollectionAPIRestAxios } from './api';
import { mapToCustomCharacterViewModel } from './custom-characters.mapper';
import { mapToCollection } from '../../common/mappers';

export const useCustomCharacters = () => {
  const [customCharacterCollection, setCustomCharactersCollection] =
    React.useState<CharacterEntityVm[]>([]);

  const loadCustomCharacterCollection = async () => {
    // AXIOS
    const characterCollectionInfo =
      await getMockedCharacterCollectionAPIRestAxios();
    const characterCollection = characterCollectionInfo.results;
    setCustomCharactersCollection(
      mapToCollection(characterCollection, mapToCustomCharacterViewModel)
    );
  };

  return {
    customCharacterCollection: customCharacterCollection,
    loadCustomCharacterCollection,
  };
};
