import React from "react";
import { SearchDebounced } from "../search-debounced/search-debounced.component";
import { CharacterViewModel } from "../character-list.mapper";
import { CardConfig, GenericCard } from "./item/card.component";
import { routes } from "@core/router/routes";
import { Grid } from "@mui/material";
import { FilterContext } from "@pods/contexts/filter.context";
import { useCharacterList } from "./useCharacterList.hook";

export const CharactersListComponent: React.FunctionComponent = (props) => {
  const { filterValue: characterName } = React.useContext(FilterContext);

  const [characterList, setCharacterList] = React.useState<
    CharacterViewModel[]
  >([]);
  const { characters } = useCharacterList(characterName);

  React.useEffect(() => {
    setCharacterList(characters);
  }, [characters]);

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
      <SearchDebounced wrapperSx={{ justifyContent: "flex-start" }} />
      {characterList && characterList.length ? (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {characterList.map((character) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={character.id}>
                <GenericCard
                  config={configureCharacterCard(character)}
                  key={character.id}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <> No results found </>
      )}
    </>
  );
};
