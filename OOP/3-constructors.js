// Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  console.log('this', this);
}

Elf.prototype.attack = function () {
  return `${this.name} attacks with ${this.weapon}`
}

const peter = new Elf('Peter', 'stones')
const sam = new Elf('Sam', 'Sticks');

console.log(sam.attack());
console.log(peter.attack());