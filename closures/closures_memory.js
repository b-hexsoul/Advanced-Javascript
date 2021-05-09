// Memory Efficient

// this below is not efficient; the memory will be created and destroyed constantly;
// what if we constantly need access to the memory?
// const heavyDuty = () => {
//   const bigArray = new Array(7000).fill("😇");
//   return bigArray;
// };

const heavyDuty = (index) => {
  const bigArray = new Array(7000).fill("😇");
  return function (index) {
    return bigArray[index];
  };
};

const getHeavyDuty = heavyDuty();
getHeavyDuty(600);

// Encapsulation
