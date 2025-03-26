//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in
// array A, namely 1, 2 and 3.

import { distinct } from "./distinct";

describe("Distinct Test", () => {
  test("should return 3", () => {
    expect(distinct([2, 1, 1, 2, 3, 1])).toEqual(3);
  });
});
