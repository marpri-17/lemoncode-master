import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useParams } from 'react-router-dom';
import { CustomCharacterViewModel } from '../../common/models';
import { getMockedCharacterAPIRestAxios } from '../custom-character-collection/api';
import {
  createEmptyCustomCharacter,
  mapCustomCharacterFromApiToVm,
} from './custom-character.mappers';
import { CharacterCard } from 'common/components';
import { useBestSentencesHook } from '../custom-character-collection';

export const CustomCharacterComponent: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();

  const [character, setCharacter] = React.useState<CustomCharacterViewModel>(
    createEmptyCustomCharacter()
  );

  const { saveCharacterSentence } = useBestSentencesHook();

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

  const deleteSentence = (index) => {
    character.bestSentences.splice(index, 1);
    const sentencesResult = [...character.bestSentences];
    console.log('BORRAR ', sentencesResult);
    const updateCharacter: CustomCharacterViewModel = {
      ...character,
      bestSentences: sentencesResult,
    };
    saveCharacterSentence(updateCharacter);
  };

  const createSentencesList = (character: CustomCharacterViewModel) => {
    return (
      <List component="ul" aria-label={character.name + 'best sentences'}>
        {character.bestSentences.map((sentence, i) => {
          return (
            <ListItem
              button
              key={character.id + '-' + i}
              onClick={() =>
                deleteSentence(
                  character.bestSentences.findIndex(
                    (phrase) => phrase === sentence
                  )
                )
              }
            >
              <ListItemText primary={sentence} />
              <ClearIcon />
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <CharacterCard character={character}>
      {createSentencesList(character)}
    </CharacterCard>
  );
};
