class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon
  }

  attack() {
    return `attack with ${this.weapon}`
  }
}

const peter = new Elf('Peter', 'Stones');
console.log(peter.attack())