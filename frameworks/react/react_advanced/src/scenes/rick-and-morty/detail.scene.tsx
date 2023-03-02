import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AppLayout } from "@layouts/app.layout";
import {
  GenericCard,
  CharacterApiModel,
  CharacterViewModel,
  mapCharacterApiModelToViewModel,
  CardConfig,
} from "@pods/character-list";
import { routes } from "@core/router/routes";
import { Typography } from "@mui/material";

export const RickAndMortyDetailScene: React.FC = () => {
  const { character: characterId } = useParams();
  const [character, setCharacter] = React.useState<CharacterViewModel>(null);

  React.useEffect(() => {
    if (characterId) {
      axios
        .get<CharacterApiModel>(
          `https://rickandmortyapi.com/api/character/${characterId}`
        )
        .then((response) => {
          if (response && response.data) {
            setCharacter(mapCharacterApiModelToViewModel(response.data));
          }
        });
    }
  }, []);

  const mapCharacterViewModelToCardConfig = (
    character: CharacterViewModel
  ): CardConfig => {
    const { id, name, image } = character;
    return {
      id: id.toString(),
      title: name,
      image,
      actionLabel: "Go back to list",
      mainListUrl: routes.rickAndMorty.list,
    };
  };

  return (
    <AppLayout>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ paddingBottom: "2rem" }}
      >
        Character information
      </Typography>
      {character ? (
        <GenericCard config={mapCharacterViewModelToCardConfig(character)} />
      ) : (
        "Loading..."
      )}
    </AppLayout>
  );
};
