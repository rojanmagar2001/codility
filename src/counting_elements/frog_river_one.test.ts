// For example, given X = 5 and array A such that:
//
//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// the function should return 6, as explained above.

import { frog_river_one } from "./frog_river_one";

describe("Frog River One Test", () => {
  test("Returns 6", () => {
    expect(frog_river_one(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
  });

  test("Returns 9", () => {
    expect(frog_river_one(7, [1, 2, 3, 4, 5, 6, 1, 7])).toEqual(7);
  });
});
