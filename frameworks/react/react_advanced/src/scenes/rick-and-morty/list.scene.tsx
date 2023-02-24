import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { CharactersListComponent } from "@pods/character-list/character-list.component";

export const RickAndMortyListScene: React.FC = () => {
  const mockCharacters = [{ name: "Rick Sanchez" }, { name: "Morty Smith" }];
  return (
    <AppLayout>
      <h2>RICK AND MORTY APP</h2>
      <CharactersListComponent listItems={mockCharacters} />
    </AppLayout>
  );
};
