// Object.create() 
const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name
  newElf.weapon = weapon
  return newElf
}

const peter = createElf('Peter', 'Stones');
const sam = createElf('Sam', 'Sticks');
console.log(peter.attack())
console.log(sam.attack())

// Object.create creates a prototypal link between the two objects.
console.log(elfFunctions.isPrototypeOf(peter));