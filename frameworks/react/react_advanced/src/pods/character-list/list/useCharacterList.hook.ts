import React from "react";
import axios, { AxiosResponse } from "axios";
import {
  CharacterResponseApiModel,
  CharacterResponseInfo,
  CharacterViewModel,
  mapCharacterApiModelToViewModel,
} from "../character-list.mapper";
import { FilterContext } from "@pods/contexts/filter.context";

export const useCharacterList = () => {
  const baseUrl = "https://rickandmortyapi.com/api/character";

  const { filterValue: characterName } = React.useContext(FilterContext);

  const [characters, setCharacters] =
    React.useState<CharacterViewModel[]>(null);
  const [pagination, setPagination] =
    React.useState<CharacterResponseInfo>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const setMemberList = (
    memberList: AxiosResponse<CharacterResponseApiModel>
  ) => {
    if (memberList.data) {
      setPagination(memberList.data.info);
      const newCharactersList = memberList.data.results.map((apiChar) =>
        mapCharacterApiModelToViewModel(apiChar)
      );
      setCharacters(newCharactersList);
    } else {
      setCharacters([]);
      setPagination(null);
    }
  };

  const buildUrlWithParams = (
    characterName?: string,
    pageNumber?: number
  ): string => {
    const params = [];
    if (characterName && characterName.length) {
      params.push(`name=${characterName}`);
    }
    if (pageNumber) {
      params.push(`page=${pageNumber}`);
    }
    return params.length > 0
      ? `${baseUrl}/?${params.join("&")}`
      : `${baseUrl}/`;
  };

  React.useEffect(() => {
    axios
      .get<CharacterResponseApiModel>(buildUrlWithParams(null, null))
      .then(setMemberList);
  }, []);

  React.useEffect(() => {
    if (characterName && characterName.length) {
      axios
        .get<CharacterResponseApiModel>(
          buildUrlWithParams(characterName, currentPage)
        )
        .then((response) => {
          setCurrentPage(1);
          return response;
        })
        .then(setMemberList);
    }
  }, [characterName]);

  React.useEffect(() => {
    if (currentPage > 1) {
      axios
        .get<CharacterResponseApiModel>(
          buildUrlWithParams(
            characterName && characterName.length ? characterName : null,
            currentPage
          )
        )
        .then(setMemberList);
    }
  }, [currentPage]);

  return { characters, pagination, currentPage, setCurrentPage };
};
