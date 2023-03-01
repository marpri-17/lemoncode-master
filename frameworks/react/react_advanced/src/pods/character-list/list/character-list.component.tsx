import React from "react";
import { SearchDebounced } from "../search-debounced/search-debounced.component";
import { CharacterViewModel } from "../character-list.mapper";
import { CardConfig, GenericCard } from "./item/card.component";
import { routes } from "@core/router/routes";

interface Props {
  listItems: CharacterViewModel[];
}

export const CharactersListComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { listItems } = props;

  const onChangeFilter = (value: string) => {
    console.log(value);
  };

  const configureCharacterCard = (
    character: CharacterViewModel
  ): CardConfig => {
    const { id, image, name: title } = character;
    return {
      id: id.toString(),
      title,
      image,
      mainListUrl: routes.rickAndMorty.detail(id.toString()),
      actionLabel: "Go to detail",
    };
  };

  return (
    <>
      <SearchDebounced
        onChangeFilterValue={onChangeFilter}
        wrapperSx={{ justifyContent: "flex-start" }}
      />
      {
        /* TODO: LIST item with material*/
        listItems.length ? (
          listItems.map((character) => {
            return (
              <GenericCard
                config={configureCharacterCard(character)}
                key={character.id}
              />
            );
          })
        ) : (
          <> No results found </>
        )
      }
    </>
  );
};
