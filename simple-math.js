const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

let actual = add(3, 7);
let expected = 10;

if (actual !== expected) {
  //   console.error(`${actual} is not equal to ${expected}`);
  throw Error(`${actual} is not equal to ${expected}`);
}
// else {
//   console.log(`${actual} is equal to ${expected}`);
// }

actual = subtract(7, 3);
expected = 4;

if (actual !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
