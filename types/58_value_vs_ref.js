// Primitives passed by value;
var a = 5;
var b = a;
b++;
console.log(a);
console.log(b);

// Objects are pass by reference
let obj1 = {
  name: "Yao",
  password: "123",
};

let obj2 = obj1;
obj2.password = "easy peasy";
console.log(obj1);
console.log(obj2);

// Arrays are objects!
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(12341243);
console.log(c);
console.log(d);

// "copy" without reference;
var obj3 = {
  name: "Brenda",
  password: "1921",
};
var obj4 = { ...obj3 }; // or Object.assign({}, obj3);
obj4.name = "Brandon";
console.log(obj3);
console.log(obj4);

var e = [1, 2, 3, 4, 5];
var f = [...e]; // or var f = [].concat(e);
f.push(12345);
console.log(e);
console.log(f);

// SPECIAL CASE!
let obj5 = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy",
  },
};

// This only copies the first level of the object!!
let clone = Object.assign({}, obj5);
let clone2 = { ...obj5 };
// This will copy all levels of the object!! Has performance implications! Probably won't see this too often.
let bestClone = JSON.parse(JSON.stringify(obj5));

obj5.c.deep = "hahahaha";
console.log(clone);
console.log(clone2);
console.log(bestClone);
