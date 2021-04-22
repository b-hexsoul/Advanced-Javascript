const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
// const giveMeTheCharacterNOW = character.getCharacter - Original with error
// const giveMeTheCharacterNOW = () => character.getCharacter(); - Using arrow function
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't
