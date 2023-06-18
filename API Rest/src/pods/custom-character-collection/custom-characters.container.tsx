import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCustomCharacters } from './custom-characters.hook';
import { CustomCharactersCollectionComponent } from './custom-characters-collection.component';
import { useBestSentencesHook } from './best-sentences/best-sentences.hook';
import { CustomCharacterViewModel } from 'common/models';

export const CustomCharacterCollectionContainer = () => {
  const { customCharacterCollection, loadCustomCharacterCollection } =
    useCustomCharacters();
  const history = useHistory();

  const { saveCharacterSentence } = useBestSentencesHook();

  React.useEffect(() => {
    loadCustomCharacterCollection();
  }, []);

  const handleClick = (id: number) => {
    history.push(linkRoutes.customCharacter(id.toString()));
  };

  const onSubmitSentence = (values) => {
    const characterId =
      Object.keys(values)[0].split('-')[
        Object.keys(values)[0].split('-').length - 1
      ];
    const character = customCharacterCollection.find(
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
    loadCustomCharacterCollection();
  };

  return (
    <CustomCharactersCollectionComponent
      charactersCollection={customCharacterCollection}
      onCharactersClick={handleClick}
      onSubmit={onSubmitSentence}
    />
  );
};
