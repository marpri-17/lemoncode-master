import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './characters-collection.hook';
import { CharactersCollectionComponent } from './characters-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleClick = (id: number) => {
    history.push(linkRoutes.character(id.toString()));
  };

  return (
    <CharactersCollectionComponent
      charactersCollection={characterCollection}
      onCharactersClick={handleClick}
    />
  );
};
