// Models for all exercises
type CloneArray<T> = T[];
interface HeroDTO {
  name: string;
  age: number;
  alive: boolean;
}

interface ExtendedHeroDTO {
  name: string;
  movies: string[];
  power: {
    hability: string;
    combat: number;
  };
}

const arrString: CloneArray<string> = ["Ana", "Pablo", "Laura"];
const arrNumbers: CloneArray<number> = [1, 2, 3];
const arrObjectSimple: CloneArray<HeroDTO> = [
  {
    name: "Batman",
    age: 30,
    alive: true,
  },
  {
    name: "Captain America",
    age: null,
    alive: false,
  },
];
const arrObjectSComplex: CloneArray<ExtendedHeroDTO> = [
  {
    name: "Batman",
    movies: ["Batman's Origin", "Batman Returns"],
    power: {
      combat: 80,
      hability: "Strength",
    },
  },
  {
    name: "Captain America",
    movies: ["Civil War", "The Winter Soldier"],
    power: {
      combat: 100,
      hability: "Defense",
    },
  },
];

console.log("EXAMPLE STRINGS:", arrString);
console.log("EXAMPLE NUMBERS:", arrNumbers);
console.log("EXAMPLE SIMPLE OBJECTS:", arrObjectSimple);
console.log("EXAMPLE COMPLEX OBJECTS:", arrObjectSComplex);

console.log("************** DELIVERABLE 01 *********************");
// head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.

const head = ([firstItem, ...others]: any[]) => firstItem;
console.log("%cHEAD -> return first item", "color: blue; font-weight: bold");
console.log("string ", head(arrString));
console.log("numbers ", head(arrNumbers));
console.log("heroes ", head(arrObjectSimple));
console.log("extended heroes ", head(arrObjectSComplex));

// tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.
const tail = ([firstItem, ...others]: any[]): any => {
  return others;
};
console.log(
  "%cTAIL -> return new array except first element",
  "color: blue; font-weight: bold"
);
console.log("string ", tail(arrString));
console.log("numbers ", tail(arrNumbers));
console.log("heroes ", tail(arrObjectSimple));
console.log("extended heroes ", tail(arrObjectSComplex));

// init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
const init = (array: Array<any>) => {
  return array.slice(0, array.length - 1);
};

console.log(
  "%cINIT -> return new array except last element",
  "color: blue; font-weight: bold"
);
console.log("string ", init(arrString));
console.log("numbers ", init(arrNumbers));
console.log("heroes ", init(arrObjectSimple));
console.log("extended heroes ", init(arrObjectSComplex));

// last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array: any[]): any[] => {
  return array[array.length - 1];
};

console.log("%cLAST -> return last element", "color: blue; font-weight: bold");
console.log("string ", last(arrString));
console.log("numbers ", last(arrNumbers));
console.log("heroes ", last(arrObjectSimple));
console.log("extended heroes ", last(arrObjectSComplex));
