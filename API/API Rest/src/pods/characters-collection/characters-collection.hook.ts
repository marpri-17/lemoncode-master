import * as React from 'react';
import { CharacterEntityVm } from '../../common/models';
import { getCharacterCollectionAPIRest } from './api';
import { mapCharacterFromApiToVm } from './characters-collection.mapper';
import { mapToCollection } from '../../common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharactersCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = async () => {
    // FETCH
    getCharacterCollectionAPIRest().then(({ results }) =>
      setCharactersCollection(mapToCollection(results, mapCharacterFromApiToVm))
    );

    // AXIOS
    /*     const characterCollectionInfo = await getCharacterCollectionAPIRestAxios();
    const characterCollection = characterCollectionInfo.results;
    setCharactersCollection(
      mapToCollection(characterCollection, mapCharacterFromApiToVm)
    ); */
  };

  return { characterCollection, loadCharacterCollection };
};
