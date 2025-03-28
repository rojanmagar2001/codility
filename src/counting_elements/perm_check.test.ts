import { perm_check } from "./perm_check";

// Result array should be returned as an array of integers.
// N = 5
// For example, given:
//
//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.
describe("Frog River One Test", () => {
  test("Returns 1", () => {
    expect(perm_check([4, 1, 3, 2])).toEqual(1);
  });

  test("Returns 0", () => {
    expect(perm_check([4, 1, 3])).toEqual(0);
  });
});
