// Arrays and functions are just objects in JavaScript.
// Inheritance - geting access to the properties and methods of another object.

// const array = []
// array.__proto__

// Actually no classes in JavaScript, only prototypal inheritance. 

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

console.log(dragon.sing())
console.log(dragon.fight())

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

// Do not use __proto__ to make prototype chain...
lizard.__proto__ = dragon;
console.log(lizard.sing())