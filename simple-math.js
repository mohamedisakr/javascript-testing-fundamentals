const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

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
