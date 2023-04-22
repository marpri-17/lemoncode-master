import React from "react";
import { SearchDebounced } from "../search-debounced/search-debounced.component";
import { CharacterViewModel } from "../character-list.mapper";
import { CardConfig, GenericCard } from "./item/card.component";
import { routes } from "@core/router/routes";
import { Grid, Box } from "@mui/material";
import { FilterContext } from "@pods/contexts/filter.context";
import { useCharacterList } from "./useCharacterList.hook";
import { CharacterPagination } from "./pagination/pagination.component";

export const CharactersListComponent: React.FunctionComponent = () => {
  const [characterList, setCharacterList] = React.useState<
    CharacterViewModel[]
  >([]);
  const { characters, setCurrentPage } = useCharacterList();

  React.useEffect(() => {
    if (characters) {
      setCharacterList(characters);
    }
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

  const handlePagination = (event: React.ChangeEvent, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box component="section">
      <SearchDebounced wrapperSx={{ justifyContent: "flex-start" }} />
      <CharacterPagination onChange={handlePagination} />
      {characterList && characterList.length ? (
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 4, xl: 4 }}>
          {characterList.map((character) => {
            return (
              <Grid item xs={6} sm={3} md={3} key={character.id}>
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
    </Box>
  );
};
