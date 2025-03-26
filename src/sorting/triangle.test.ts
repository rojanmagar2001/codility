// For example, consider array A such that:
//
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.
//
// Write a function:
//
// function solution(A: number[]): number;
// that, given an array A consisting of N integers, returns 1 if there exists a
// triangular triplet for this array and returns 0 otherwise.
//
// For example, given array A such that:
//
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:
//
//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.

import { triangle } from "./triangle";

describe("Triangle Test", () => {
  test("Should be triangular", () => {
    expect(triangle([10, 2, 5, 1, 8, 20])).toBeTruthy();
  });

  test("Should not be triangular", () => {
    expect(triangle([10, 50, 5, 1])).toBeFalsy();
  });
});
