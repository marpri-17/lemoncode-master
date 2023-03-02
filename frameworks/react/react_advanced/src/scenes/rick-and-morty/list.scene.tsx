import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { CharacterListContainer } from "@pods/character-list";
import { Typography } from "@mui/material";

export const RickAndMortyListScene: React.FC = () => {
  return (
    <AppLayout>
      <Typography variant="h2" textAlign="center">
        Rick & Morty
      </Typography>
      <CharacterListContainer />
    </AppLayout>
  );
};
