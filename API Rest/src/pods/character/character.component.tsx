import React from 'react';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button, Grid, Typography } from '@material-ui/core';
// import { formValidation } from './hotel.validations';
// import { Hotel } from './hotel.vm';
import { Character } from './character.vm';
import * as classes from './character.styles';
// import { Lookup } from 'common/models';

interface Props {
  character: Character;
  // cities: Lookup[];
  // onSave: (hotel: Hotel) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Grid container spacing={2}>
      <Typography variant="h4">{character.name}</Typography>

      <img src={character.picture} alt={character.name} />
    </Grid>
  );
};
