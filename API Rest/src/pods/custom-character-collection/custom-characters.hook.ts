import * as React from 'react';
import { CustomCharacterViewModel } from '../../common/models';
import { getMockedCharacterCollectionAPIRestAxios } from './api';
import { mapCharacterDTOtoCustomVM } from './custom-characters.mapper';
import { mapToCollection } from '../../common/mappers';

export const useCustomCharacters = () => {
  const [customCharacterCollection, setCustomCharactersCollection] =
    React.useState<CustomCharacterViewModel[]>([]);

  const loadCustomCharacterCollection = async () => {
    // AXIOS
    const characterCollectionInfo =
      await getMockedCharacterCollectionAPIRestAxios();
    const characterCollection = characterCollectionInfo;
    setCustomCharactersCollection(
      mapToCollection(characterCollection, mapCharacterDTOtoCustomVM)
    );
  };

  return {
    customCharacterCollection: customCharacterCollection,
    loadCustomCharacterCollection,
  };
};
