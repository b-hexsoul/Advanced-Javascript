// @What-is-a-closure?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

const getSecret = (secret) => {
  return {
    get: () => secret,
  };
};

const secret = getSecret("this is the secret");
console.log(secret.get());
