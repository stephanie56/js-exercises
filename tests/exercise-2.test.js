const countWords = require("../exercise-2");

describe("exercise-2 tests", () => {
  it("counts the words in an array and returns and object", () => {
    const words = ["cake", "pie", "cake", "tart", "doughnut", "pie"];
    expect(countWords(words)).toEqual({
      cake: 2,
      pie: 2,
      tart: 1,
      doughnut: 1
    });
  });
});
