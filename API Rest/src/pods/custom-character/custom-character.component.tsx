import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { CustomCharacterViewModel } from '../../common/models';
import { getMockedCharacterAPIRestAxios } from '../custom-character-collection/api';
import {
  createEmptyCustomCharacter,
  mapCustomCharacterFromApiToVm,
} from './custom-character.mappers';
import { CharacterCard } from 'common/components';

export const CustomCharacterComponent: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  const [character, setCharacter] = React.useState<CustomCharacterViewModel>(
    createEmptyCustomCharacter()
  );

  const handleLoadCharacter = async () => {
    const apiCharacter = await getMockedCharacterAPIRestAxios(id);
    console.log(apiCharacter);
    setCharacter(mapCustomCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterCard character={character}></CharacterCard>;
  {
    /* <Grid container spacing={2}>
      PERSONAJE
      <img src={character.image} alt={character.name} />
      <Typography variant="h4">{character.name}</Typography>
    </Grid> */
  }
  // );
};
