console.log("************** DELIVERABLE 01 *********************");

const test = ["Ana", "Pablo", "Laura"];
const test2 = [
  {
    id: 1,
    name: "Rex",
    type: "dog",
    tricks: [
      {
        id: 1,
        name: "sit",
        learned: true,
        expertise: 3,
      },
      {
        id: 2,
        name: "hand",
        learned: false,
        expertise: null,
      },
    ],
    owner: {
      name: "Pepa",
      adress: "C/ Valencia 4"
    }
  },
  {
    id: 2,
    name: "Laika",
    type: "dog",
    tricks: [
      {
        id: 1,
        name: "sit",
        learned: false,
        expertise: null,
      },
      {
        id: 2,
        name: "hand",
        learned: false,
        expertise: null,
      },
    ],
    owner: {
      name: "Rigoberta",
      adress: "C/ Turín 2"
    }
  },
];

// head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.

const head = ([firstItem, ...others]: any[]): any => firstItem;



// tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.
const tail = ([firstItem, ...args]: any[]): any => {
    return args
}; 


// init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
const init = (array) => array.reduce((acc, item, index) => {
    if(index < array.length - 1){
      acc.push(item)
    }
    return acc;
  }, []);

// last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array: any[]): any[] => {
    return array[array.length - 1]
}; 

/**
 * Test
 * TODO - Object are not inmutables
 *      - types
 */
// console.log(head(test));
const objectItem = head(test2);
// objectItem[0].type = "cambiado";
console.log(objectItem);
objectItem.id = 40;
console.log(test2)

const testTail = tail(test);
const testTail1 = tail(test2);
// testTail1[0].name = "cambiado";
console.log(testTail1)

// Init

const testInit = tail(test);
testInit[0] = "Lorenza";
console.log("INIT", test)
const testInit1 = tail(test2);
testInit1[0].name = "cambiado";
console.log(test2)