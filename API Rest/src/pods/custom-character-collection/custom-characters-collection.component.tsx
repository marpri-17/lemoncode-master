import * as React from 'react';
import { CustomCharacterViewModel } from '../../common/models';
import { CharacterCard } from '../../common/components';
import * as classes from './custom-characters.styles';
import { BestSentencesComponent } from './best-sentences/best-sentences.component';
import { useBestSentencesHook } from './best-sentences/best-sentences.hook';

interface Props {
  charactersCollection: CustomCharacterViewModel[];
  onCharactersClick: (id: number) => void;
}

export const CustomCharactersCollectionComponent: React.FunctionComponent<
  Props
> = (props) => {
  const { charactersCollection, onCharactersClick } = props;

  const { saveCharacterSentence } = useBestSentencesHook();

  const navigateToDetail = (event: React.BaseSyntheticEvent, characterId) => {
    event.preventDefault();
    onCharactersClick(characterId);
  };

  const onSubmitSentence = (values) => {
    const characterId =
      Object.keys(values)[0].split('-')[
        Object.keys(values)[0].split('-').length - 1
      ];
    const character = charactersCollection.find(
      (char) => char.id.toString() === characterId
    );
    const sentences = [
      ...character.bestSentences,
      ...[values[Object.keys(values)[0]]],
    ];
    const updateCharacter: CustomCharacterViewModel = {
      ...character,
      bestSentences: [...sentences],
    };
    saveCharacterSentence(updateCharacter);
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
                onSubmit={onSubmitSentence}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
