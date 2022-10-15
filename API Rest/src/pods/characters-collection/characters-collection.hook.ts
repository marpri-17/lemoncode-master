import * as React from 'react';
import { CharacterEntityVm } from './characters-collection.vm';
import { getCharactersCollection } from './api';
import { mapFromApiToVm } from './characters-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharactersCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharactersCollection().then(({ results }) =>
      setCharactersCollection(mapToCollection(results, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
