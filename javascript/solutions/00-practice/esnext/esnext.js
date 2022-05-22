/**
 * Args exercise
 */ 

  // TODO - TS??
function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}


/**
 * Array Operations
 */

const head = (list) =>{
  const copiedArray = list.slice(0, list.length);
  const [result] = copiedArray;
  // return [firstItem] = [...list]
  return result;

  
} 


// const headDeep = ([list] = []) => [...list]; // Implementation here.

const simpleList = ["head", "body", "tail"]; 
const objectList = [{name: "Paco", id: "2"}, {name: "Laura"}, {name: "Ana"}]; 
console.log(objectList); 
// console.log(head(simpleList));
// console.log(head(objectList));
const test = head(objectList);
// test.name = "Lorenza"
// test.id= "9999"
console.log(test);
console.log(objectList); 
/* result.name = "Lorenzo" */
// Misma referencia. Devolver una nueva copia del primer elemento del array (nueva referencia, no modifica el original)

const tail = ([firstItem, ...others] = array) => {
  return others;
}; // Implementation here.
const testTail = ["This", "is", "a", "tail"];

const tailCopy = tail(testTail);

tailCopy[0] = "999999999";
console.log (tailCopy === testTail)
console.log(testTail)
console.log(tailCopy)


const init = (array) => {
  return array.reduce((acc, item, index) => {
    if(index < array.length - 1){
      acc.push(item)
    }
    return acc;
  }, []);
}; // Implementation here.

const originalArr = ['Hey', 'Ho', "Let's go"];
const initialized = init(originalArr); 
console.log(originalArr === initialized);
initialized[0]= "Ho";
console.log(originalArr, initialized)

const last = (list) => {
  return list[list.length - 1];
}

const testLastFnc =["head", "body", "footer"]; 
console.log(last(testLastFnc));

/**
 * Concat exercise
 */

const concat = (a, b) => [...a,...b]; // Implementation here.

console.log(concat(["hola", "que tal"], ["mundo"]));


const concatMulti = (...args) => {
  let result = [];
  args.forEach((arg => result = concat(result, arg)));
  return result;
}; // Implementation here.
const object = {say: "hola"};
const concatenatedMulti = concatMulti([object, "que tal"], ["como", "está?"], ["mundo"]); 
object.say = "mierda, misma referencia"
console.log(concatenatedMulti);


/**
 * swap values Exercise
 */

 let a = "A";
 let b = "B";
 
 // Implementation here, one line, one shot!
 [a, b] = [ b, a]
 
 console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");