// For example, given array A such that:
//
//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.

import { max_product_of_three } from "./max_product_of_three";

describe("Max Product of Three Test", () => {
  test("should return 60", () => {
    expect(max_product_of_three([-3, 1, 2, -2, 5, 6])).toEqual(60);
  });
});
