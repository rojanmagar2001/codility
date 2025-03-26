// For example, given the string S = CAGCCTA and arrays P, Q such that:
//
//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// the function should return the values [2, 4, 1], as explained above.

import { genomic_range } from "./genomic_range";

describe("Genomic Range Test", () => {
  test("Should return [2, 4, 1]", () => {
    expect(genomic_range("CAGCCTA", [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
  });
});
