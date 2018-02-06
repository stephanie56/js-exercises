const transformStrings = require("../exercise-1");

describe("tests for exercise 1", () => {
  it("returns strings under 20 characters", () => {
    const strings = ["1234", "123456789012345678901"];
    expect(transformStrings(strings)).toHaveLength(1);
  });

  it("reverses the filtered strings", () => {
    const strings = ["1234", "123456789012345678901"];
    expect(transformStrings(strings)).toEqual(["4321"]);
  });

  it("returns strings with 20 characters", () => {
    const strings = ["1234", "12345678901234567890"];
    expect(transformStrings(strings)).toHaveLength(2);
  });
});
