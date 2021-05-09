// Closures allow a function to access variables rom an enclosing scope or environment even after it leaves the scope in which it was declared.

const a = () => {
  let grandpa = "grandpa";
  return (b = () => {
    let father = "father";
    return (c = () => {
      let son = "son";
      return `${grandpa} ${father} ${son}`;
    });
  });
};

console.log(a()()());
