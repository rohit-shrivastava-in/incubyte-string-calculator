import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number string", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should return the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });
});
