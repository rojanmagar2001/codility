// For example, given array A such that:
//
//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// the function should return 1, as explained above.

import { min_avg_two_slice } from "./min_avg_two_slice";

describe("Minimum Average Two Slice Test", () => {
  test("Shoud return 1", () => {
    expect(min_avg_two_slice([4, 2, 2, 5, 1, 5, 8])).toEqual(1);
  });
});
