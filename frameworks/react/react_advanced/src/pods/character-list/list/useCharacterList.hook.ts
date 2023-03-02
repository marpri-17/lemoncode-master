import React from "react";
import axios, { AxiosResponse } from "axios";
import {
  CharacterResponseApiModel,
  CharacterViewModel,
  mapCharacterApiModelToViewModel,
} from "../character-list.mapper";

export const useCharacterList = (characterName?: string) => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] =
    React.useState<CharacterViewModel[]>(null);

  const setMemberList = (
    memberList: AxiosResponse<CharacterResponseApiModel>
  ) => {
    if (memberList.data) {
      setCharacters(
        memberList.data.results.map((apiChar) =>
          mapCharacterApiModelToViewModel(apiChar)
        )
      );
    } else {
      setCharacters([]);
    }
  };

  React.useEffect(() => {
    if (characterName && characterName.length) {
      axios
        .get<CharacterResponseApiModel>(`${baseUrl}/?name=${characterName}`)
        .then(setMemberList);
    } else {
      axios.get<CharacterResponseApiModel>(baseUrl).then(setMemberList);
    }
  }, [characterName]);

  return { characters };
};
