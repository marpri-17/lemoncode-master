import * as React from 'react';
import { CharacterEntityVm } from '../../common/models';
import { CharacterCard } from '../../common/components';
import * as classes from './characters-collection.styles';

interface Props {
  charactersCollection: CharacterEntityVm[];
  onCharactersClick: (id: number) => void;
}

export const CharactersCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { charactersCollection, onCharactersClick } = props;

  return (
    <div className={classes.root}>
      {/*   <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button> */}

      <ul className={classes.list}>
        {charactersCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onClick={() => onCharactersClick(character.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
