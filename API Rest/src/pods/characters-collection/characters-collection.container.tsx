import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
// import { deleteHotel } from './api';
import { useCharacterCollection } from './characters-collection.hook';
import { CharactersCollectionComponent } from './characters-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  /*   const handleCreateHotel = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editHotel(id));
  }; */

  const handleClick = (id: number) => {
    history.push(linkRoutes.character(id.toString()));
  };

  /*   const handleDelete = async (id: string) => {
    await deleteHotel(id);
    loadHotelCollection();
  }; */

  return (
    <CharactersCollectionComponent
      charactersCollection={characterCollection}
      onCharactersClick={handleClick}
    />
  );
};
