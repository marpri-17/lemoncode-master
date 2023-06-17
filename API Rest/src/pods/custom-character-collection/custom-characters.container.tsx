import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCustomCharacters } from './custom-characters.hook';
import { CustomCharactersCollectionComponent } from './custom-characters-collection.component';

export const CustomCharacterCollectionContainer = () => {
  const { customCharacterCollection, loadCustomCharacterCollection } =
    useCustomCharacters();
  const history = useHistory();

  React.useEffect(() => {
    loadCustomCharacterCollection();
  }, []);

  const handleClick = (id: number) => {
    history.push(linkRoutes.customCharacter(id.toString()));
  };

  return (
    <CustomCharactersCollectionComponent
      charactersCollection={customCharacterCollection}
      onCharactersClick={handleClick}
    />
  );
};
