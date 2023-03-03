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

export interface CharacterResponseInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResponseApiModel {
  info: CharacterResponseInfo;
  results: CharacterApiModel[];
}

export const mapCharacterApiModelToViewModel = (
  character: CharacterApiModel
): CharacterViewModel => character as CharacterViewModel;
