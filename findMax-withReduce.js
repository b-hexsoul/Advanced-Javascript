const array = [1, 2, 3, 4, 5, 6, 7, 8, 2];

const findMax = (array) => {
  return array.reduce((acc, curr) => {
    console.log("acc", acc, "curr", curr);
    return Math.max(acc, curr);
  });
};

console.log(findMax(array));
