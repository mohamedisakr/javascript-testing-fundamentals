const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = (...args) => Promise.resolve(add(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { add, subtract, sumAsync, subtractAsync };

/*
// if (actual !== expected) {
//   //   console.error(`${actual} is not equal to ${expected}`);
//   throw Error(`${actual} is not equal to ${expected}`);
// }
// else {
//   console.log(`${actual} is equal to ${expected}`);
// }

actual = subtract(7, 3);
expected = 4;
expect(actual).toBe(expected);

// if (actual !== expected) {
//   throw new Error(`${actual} is not equal to ${expected}`);
// }

*/
