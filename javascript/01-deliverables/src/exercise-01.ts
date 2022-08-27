console.log("************** DELIVERABLE 01 *********************");

type ArrDeep<T> = T[];

const test: ArrDeep<string> = ["Ana", "Pablo", "Laura"];
console.log("EXAMPLE:", test);
// head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.

const head = ([firstItem, ...others]: any[]) => firstItem;

console.log("HEAD", head(test));

// tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.
const tail = ([firstItem, ...others]: any[]): any => {
  return others;
};
console.log("TAIL: ", tail(test));

// init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
const init = (array: Array<any>) => {
  return array.slice(0, array.length - 1);
};

console.log("INIT: ", init(test));

// last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array: any[]): any[] => {
  return array[array.length - 1];
};

console.log("LAST: ", last(test));
