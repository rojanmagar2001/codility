// A non-empty array A consisting of N integers is given. The product of triplet (P,
// Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
//
// For example, array A such that:
//
//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:
//
// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.
//
// Write a function:
//
// function solution(A: number[]): number;
// that, given a non-empty array A, returns the value of the maximal product of any
// triplet.
//
// For example, given array A such that:
//
//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

export function max_product_of_three(A: number[]): number {
  A = A.sort((a, b) => a - b);

  let N = A.length;

  const max1 = A[N - 1] * A[N - 2] * A[N - 3];

  const max2 = A[0] * A[1] * A[N - 1];

  return Math.max(max1, max2);
}

// Approach
// Sort the array: Sorting helps in easily identifying the largest and smallest
// values.
// Consider two cases:
// The product of the three largest numbers: A[N-1] * A[N-2] * A[N-3]
// The product of two smallest (most negative) numbers and the largest number: A[0] * A[1] * A[N-1]
// This is necessary because multiplying two negative numbers results in a positive
// value, which might yield a larger product.
// Return the maximum of these two cases.
