import { binary_gap } from "./binary_gap";

describe("Binary Max Gap Finder", () => {
  test("Returns 0", () => {
    expect(binary_gap(9)).toEqual(2);
  });

  test("Returns 4", () => {
    expect(binary_gap(529)).toEqual(4);
  });

  test("The number 20 contains binary gap length of 1", () => {
    expect(binary_gap(20)).toEqual(1);
  });

  test("The number 15 has binary representation 1111 has no binary gaps", () => {
    expect(binary_gap(32)).toEqual(0);
  });

  test("The number 1041 contains binary gap length of 5", () => {
    expect(binary_gap(1041)).toEqual(5);
  });
});
