import * as React from 'react';
import { CharacterEntityVm } from './characters-collection.vm';
import {
  getCharacterCollectionAPIRest,
  getCharacterCollectionAPIRestAxios,
} from './api';
import { mapFromApiToVm } from './characters-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharactersCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = async () => {
    // FETCH
    getCharacterCollectionAPIRest().then(({ results }) =>
      setCharactersCollection(mapToCollection(results, mapFromApiToVm))
    );

    // AXIOS
    /*     const characterCollectionInfo = await getCharacterCollectionAPIRestAxios();
    const characterCollection = characterCollectionInfo.results;
    setCharactersCollection(
      mapToCollection(characterCollection, mapFromApiToVm)
    ); */
  };

  return { characterCollection, loadCharacterCollection };
};
