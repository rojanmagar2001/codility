import { max_counters } from "./max_counters";

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

describe("Max Counters Test", () => {
  test("Returns 1", () => {
    expect(max_counters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
  });
});
