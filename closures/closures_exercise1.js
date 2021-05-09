var array = [1,2,3,4];
for (var i = 0; i < array.length; i++) {
  ((i) => {setTimeout(() => {
    console.log(`I am at index ${i}`)
  },3000)})(i)
}

// or
var array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(`I am at index ${i}`)
  },3000)
}