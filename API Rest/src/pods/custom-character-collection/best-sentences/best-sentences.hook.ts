import React from 'react';
import {
  CustomCharacterDTO,
  CustomCharacterViewModel,
} from '../../../common/models';

import { mapCustomCharacterVMtoDTO } from '../custom-characters.mapper';

export const useBestSentencesHook = () => {
  const [character, setCharacter] = React.useState<CustomCharacterDTO>(null);

  const saveCharacterSentence = (character: CustomCharacterViewModel) => {
    if (character) {
      setCharacter(mapCustomCharacterVMtoDTO(character));
    }
  };

  React.useEffect(() => {
    if (character) {
      // Send to api
      console.log(`SEND: `, character);
    }
  }, [character]);

  return { saveCharacterSentence };
};
