import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CharacterEntityVm } from '../../common/models';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Grid container spacing={2}>
      <img src={character.image} alt={character.name} />
      <Typography variant="h4">{character.name}</Typography>
    </Grid>
  );
};
