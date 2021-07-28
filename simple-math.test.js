const { expect, test } = require("./testing-framework");
const { add, subtract } = require("./simple-math");

test("should add numbers", () => {
  let actual = add(3, 7);
  let expected = 10;
  expect(actual).toBe(expected);
});

test("should subtract numbers", () => {
  let actual = subtract(3, 7);
  let expected = 10;
  expect(actual).toBe(expected);
});
