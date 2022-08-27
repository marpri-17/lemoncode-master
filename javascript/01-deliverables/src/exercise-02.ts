console.log("************** DELIVERABLE 02 *********************");
console.log(
  "%cCONCAT -> copy arrays into single one",
  "color: blue; font-weight: bold"
);

const concat = (...args: any[]) =>
  args.reduce((acc, array) => [...acc, ...array], []);

console.log(concat(["Array", 1], ["Array", 2]));
console.log(concat(["Hey", 1], ["Ho", 2], ["Let's go", 3]));

const heroesArray = [
  {
    name: "Captain America",
    properties: { isAlive: false, superpower: "Defense" },
  },
];
const newHero = {
  name: "Batman",
  properties: { isAlive: true, superpower: "Strength" },
};

console.log(concat(heroesArray, [newHero]));
