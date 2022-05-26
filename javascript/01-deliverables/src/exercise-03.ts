console.log("************** DELIVERABLE 03 *********************");
function clone(source: object) {
  return {...source}
}

function merge(sourceA, sourceB) {
    return {...clone(sourceB), ...clone(sourceA)}
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true};

const merged = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}


const copiedA = clone(a);
a.country = 'Hey'
console.log(copiedA);
// console.log(a);
console.log(merged);
b.married = false;
console.log(b)


