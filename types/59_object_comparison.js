var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };

// Doesn't work!
var eq = user1 === user2;
console.log(eq);

// Fast and limited. Order of properties is important;
var equals1 = JSON.stringify(user1) === JSON.stringify(user2);
console.log(equals1);
