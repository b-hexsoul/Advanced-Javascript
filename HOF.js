// Higher Order Functions
// function returns another function, or function accepts a function as param.

// const giveAccessTo = (name) => `Access granted to ${name}`;

// const authenticate = (person) => {
//   let array = [];
//   person.level === "admin" ? (verify = 10000) : (verify = 20000);
//   for (let i = 0; i < verify; i++) {
//     array.push(i);
//   }
//   return giveAccessTo(person.name);
// };

// const letPerson = (person, fn) => {
//   if (person.level === "admin") {
//     return fn(person);
//   } else if (person.level === "user") {
//     return fn(person);
//   }
// };

// letPerson({ level: "admin", name: "Sally" }, authenticate);

const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

// Above simplified by arrow functions const multiplyBy = num1 => num2 => num1*num2;

const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);

console.log(multiplyByTwo(4));
console.log(multiplyByTen(10));
