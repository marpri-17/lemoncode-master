import React from 'react';
import { useParams } from 'react-router-dom';
import {
  mapCharacterFromApiToVm,
  createEmptyCharacter,
} from './character.mappers';
import { CharacterComponent } from './character.component';
import { CharacterEntityVm } from 'common/models';
import * as api from './api';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterEntityVm>(
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
  }, []);

  return <CharacterComponent character={character} />;
};
