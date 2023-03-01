export interface CharacterApiModel {
  name: string;
  id: number;
  image: string;
}

export interface CharacterViewModel {
  name: string;
  id: number;
  image: string;
}

export interface CharacterResponseApiModel {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterApiModel[];
}

export const mapCharacterApiModelToViewModel = (
  character: CharacterApiModel
): CharacterViewModel => character as CharacterViewModel;
