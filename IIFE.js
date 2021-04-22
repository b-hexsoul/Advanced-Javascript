// @Use Cases - data privacy!
// Prevent pollution of the global variable scope
// provide a wrapping scope around a local variable that is accessed by a function returned from the IIFE.
// This way, a closure is created that enables the function to access the local variable even when that function is executed outside of the IIFE's lexical scope.
// Closures are frequently used in JavaScript for object data privacy.
// in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.
const counter = (() => {
  let count = 0;
  return {
    increase() {
      count++;
      return `The count has increased to ${count}`;
    },
    decrease() {
      count--;
      return `The count has decreased to ${count}`;
    },
    value() {
      return count;
    },
    setCount(num = 0) {
      return (count = num);
    },
  };
})();
