const add = (a, b) => {
  return a + b;
};

const subs = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const mult = (a, b) => {
  return a * b;
};

const PI = 3.214;


module.exports = { add, mult, subs, div, PI };

// obj.

// When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously assigned.
