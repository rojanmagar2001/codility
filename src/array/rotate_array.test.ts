import { rotate_array } from "./rotate_array";

describe("Rotate Array", () => {
  test("A = [3, 8, 9, 7, 6] K = 30 => [9, 7, 6, 3, 8]", () => {
    expect(rotate_array([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  });

  test("A = [0, 0, 0] K = 1 =>[0, 0, 0]", () => {
    expect(rotate_array([0, 0, 0], 1)).toEqual([0, 0, 0]);
  });

  test("A = [1, 2, 3, 4] K = 4 => [1, 2, 3, 4]", () => {
    expect(rotate_array([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });
});
