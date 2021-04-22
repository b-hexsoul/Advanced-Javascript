// call() apply() bind()

// () are shorthand for .call()
let print = function () {
  console.log("hello world");
};

print.call();

// obj1.call(obj2) Calls a method of an object, substituting another object for the current object.
// function needs the 'this' keyword
const wizard = {
  name: "merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};
const archer = {
  name: "robin",
  health: 30,
};

console.log("1", archer);
// you can add arguments onto .call();
wizard.heal.call(archer, 100, 30);
console.log("2", archer);
// .apply() takes in the obj and an array of arguments
wizard.heal.apply(archer, [2, 3]);
console.log("3", archer);

const healArcher = wizard.heal.bind(archer);
healArcher(5, 5);
console.log("4", archer);
