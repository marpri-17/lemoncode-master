console.log("************** DELIVERABLE 02 *********************");
const concat = (...args: any[]) => {
    const result = []
    args.forEach(arg => result.push(...arg));
    return result;
};

console.log(concat(["Hola"], ["que tal?"]));
const object1 = {name: "cosa", properties: {isAlive: true, color: "green"}};
const object2 = {name: "Batman", properties: {isAlive: true, color: "dark"}};
const concatenated = concat([object1], [object2]);
concatenated[0].name = "Superman"
console.log(object1);
console.log(concatenated)