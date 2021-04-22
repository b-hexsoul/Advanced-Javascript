// In the browser, global execution context, the window object === this.

// inside the object, this refers to the object itself

const obj = {
  name: "Billy",
  sing() {
    return this.name;
  },
  location: {
    address: "123 main street",
    where() {
      return this.address;
    },
  },
};

console.log(obj.sing());
console.log(obj.location.where());

// gives methods access to the object, below code should be run in native browser javascript
function importantPerson() {
  console.log(this.name);
}
// var is added to the global object in browser
var name = "Sunny";
const obj1 = {
  name: "Brenda",
  importantPerson: importantPerson,
};
const obj2 = {
  name: "Brandon",
  importantPerson: importantPerson,
};

importantPerson();
obj1.importantPerson();
obj2.importantPerson();

// lexically bind this using an arrow function
const newObj = {
  name: "billy",
  sing() {
    console.log("a", this);
    let anotherFunc = () => {
      console.log("b", this);
    };
    anotherFunc();
  },
};

newObj.sing();
