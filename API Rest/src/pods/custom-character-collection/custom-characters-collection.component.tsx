import * as React from 'react';
import { CharacterEntityVm } from '../../common/models';
import { CharacterCard } from '../../common/components';
import * as classes from './custom-characters.styles';

interface Props {
  charactersCollection: CharacterEntityVm[];
  onCharactersClick: (id: number) => void;
}

export const CustomCharactersCollectionComponent: React.FunctionComponent<
  Props
> = (props) => {
  const { charactersCollection, onCharactersClick } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {charactersCollection.map((character) => (
          <li
            key={character.id}
            onClick={() => onCharactersClick(character.id)}
          >
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
