import * as React from 'react';
import { CustomCharacterViewModel } from '../../common/models';
import { CharacterCard } from '../../common/components';
import { BestSentencesComponent } from './best-sentences/best-sentences.component';
import * as classes from './custom-characters.styles';

interface Props {
  charactersCollection: CustomCharacterViewModel[];
  onCharactersClick: (id: number) => void;
  onSubmit: (values: any) => void;
}

export const CustomCharactersCollectionComponent: React.FunctionComponent<
  Props
> = (props) => {
  const { charactersCollection, onCharactersClick, onSubmit } = props;

  const navigateToDetail = (event: React.BaseSyntheticEvent, characterId) => {
    event.preventDefault();
    onCharactersClick(characterId);
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {charactersCollection.map((character) => {
          return (
            <li key={character.id}>
              <CharacterCard
                character={character}
                onClick={(event) => navigateToDetail(event, character.id)}
              />
              <BestSentencesComponent
                characterId={character.id}
                characterName={character.name}
                onSubmit={onSubmit}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
