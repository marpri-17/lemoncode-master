import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { CharacterListContainer } from "@pods/character-list";

export const RickAndMortyListScene: React.FC = () => {
  return (
    <AppLayout>
      <h2>RICK AND MORTY APP</h2>
      <CharacterListContainer />
    </AppLayout>
  );
};
