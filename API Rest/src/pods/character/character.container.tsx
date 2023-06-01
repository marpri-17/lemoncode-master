import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );

  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    // FETCH
    /* api.getCharacterAPIRest(id).then((character) => {
      setCharacter(mapHotelFromApiToVm(character));
    }); */

    // AXIOS
    const apiCharacter = await api.getCharacterAPIRestAxios(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    // handleLoadCityCollection();
  }, []);

  /*   const handleSave = async (hotel: Hotel) => {
    const apiHotel = mapHotelFromVmToApi(hotel);
    const success = await api.saveHotel(apiHotel);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  }; */

  return <CharacterComponent character={character} />;
};
