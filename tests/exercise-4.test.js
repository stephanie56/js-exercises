const reduce = require("../exercise-4");

describe("exercise 4 tests", () => {
  it("functions like an array reduce", () => {
    const words = [10, 20, 30, 40, 50];
    const sum = (acc, val) => acc + val;

    expect(reduce(words, sum, 0)).toBe(150);
  });
});
