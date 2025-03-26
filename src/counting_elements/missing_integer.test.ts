import { missing_integer } from "./missing_integer";

describe("Missing Integer Test Test", () => {
  test("Returns 5", () => {
    expect(missing_integer([1, 6, 4, 3, 2])).toEqual(5);
  });

  test("Returns 4", () => {
    expect(missing_integer([1, 2, 3])).toEqual(4);
  });

  test("Returns 1", () => {
    expect(missing_integer([-1, -2])).toEqual(1);
  });
});
