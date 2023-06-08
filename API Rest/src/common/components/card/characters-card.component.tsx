import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as classes from './characters-card.styles';
import { CharacterEntityVm } from '../../models';

interface Props {
  character: CharacterEntityVm;
  onClick: (event: React.BaseSyntheticEvent) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onClick } = props;

  return (
    <Card onClick={onClick}>
      <CardHeader title={character.name} subheader={character.location.name} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Status: {character.status}
          </Typography>
        </div>
      </CardContent>
      {/* <CardActions>
        <IconButton onClick={() => onEdit(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(hotel.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};
