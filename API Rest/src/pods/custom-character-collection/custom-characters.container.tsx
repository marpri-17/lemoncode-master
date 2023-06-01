import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCustomCharacters } from './custom-characters.hook';
import { CustomCharactersCollectionComponent } from './custom-characters-collection.component';

export const CustomCharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCustomCharacters();
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
    <CustomCharactersCollectionComponent
      charactersCollection={characterCollection}
      onCharactersClick={handleClick}
    />
  );
};
