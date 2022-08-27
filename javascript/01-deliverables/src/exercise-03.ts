console.log("************** DELIVERABLE 03 *********************");
console.log("%cCLONE -> duplicate objects", "color: blue; font-weight: bold");

const personA = { name: "Maria", surname: "Ibañez", country: "SPA" };
const personB = { name: "Luisa", age: 31, married: true };

function clone(source: object) {
  return { ...source };
}
const clonePersonA = clone(personA);
const clonePersonB = clone(personB);

console.log("Clone person 1: ", clonePersonA);
console.log("Clone person 2: ", clonePersonB);

console.log(
  "%cMERGE -> integrate objects into single one, source must prevail",
  "color: blue; font-weight: bold"
);
function merge(source: object, target: object): object {
  return { ...clone(target), ...clone(source) };
}

const persons = merge(personA, personB);
// expected output: {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log("MERGED: ", persons);

personA.country = "UK";
console.log("Reassing original person 1 country to UK: ", personA);
console.log("Cloned person is not affected: ", clonePersonA);
console.log("Neither affects on merged object: ", persons);
