// An array A consisting of N different integers is given. The array contains
// integers in the range [1..(N + 1)], which means that exactly one element is missing.
//
// Your goal is to find that missing element.
//
// Write a function:
//
// function solution(A: number[]): number;
// that, given an array A, returns the value of the missing element.
//
// For example, given array A such that:
//
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

export function perm_missing_elem(A: number[]): number {
  const N = A.length;

  const expectedSum = ((N + 1) * (N + 1 + 1)) / 2;
  const actualSum = A.reduce((acc, curr) => acc + curr, 0);

  return expectedSum - actualSum;
}

// Why This Works
// Formula for Sum of First N+1 Numbers
// Computes what the total sum should be if no element were missing.
// Subtract Actual Sum
// The difference gives the missing number.
// Time & Space Complexity
// ✅ Time Complexity: O(N) (single pass to compute sum)
// ✅ Space Complexity: O(1) (only a few variables used)
//
// This is the most efficient way to find the missing number! 🚀
