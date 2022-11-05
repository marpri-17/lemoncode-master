import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Grid,
  TableCell,
  Typography,
  TableBody,
  TableContainer,
  Table,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Character } from './character.vm';
import { linkRoutes } from 'core/router';
import { Img } from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigationHistory = useHistory();

  function createData<T>(id: number, category: string, value: T) {
    return { id, category, value };
  }

  const rows = [
    createData(2, 'Location', character.location.name),
    createData(4, 'Species', character.species),
    createData(1, 'Gender', character.gender),
    createData(3, 'Status', character.status),
  ];

  const handleNavigation = () => {
    navigationHistory.push(linkRoutes.root);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={4}>
        <Img alt={`${character.name} picture`} src={character.picture} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4">{character.name}</Typography>
        <TableContainer>
          <Table component={Paper}>
            <TableBody>
              {rows
                .map((row) => {
                  console.log(row);
                  return row;
                })
                .map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell colSpan={4} align="left">
                        {row.category}
                      </TableCell>
                      <TableCell colSpan={8} align="center">
                        {row.value}
                      </TableCell>
                    </TableRow>
                  );
                })}
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleNavigation}>
          Go Back
        </Button>
      </Grid>
    </Grid>
  );
};
