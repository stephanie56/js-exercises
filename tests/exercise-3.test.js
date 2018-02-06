const map = require("../exercise-3");

describe("exercise-3 tests", () => {
  const numbers = [2, 4, 6, 8, 10];
  const half = n => n / 2;
  it("iterates through an array and applies a function to each item", () => {
    expect(map(numbers, half)).toEqual([1, 2, 3, 4, 5]);
  });

  it("shouldnt alter the original array", () => {
    map(numbers, half);
    expect(numbers).toEqual([2, 4, 6, 8, 10]);
  });
});
