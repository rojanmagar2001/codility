// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
//
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
//
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
//
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
//
// For example, consider array A such that:
//
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:
//
// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:
//
// function solution(A: number[]): number;
//
// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
//
// For example, given:
//
//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

export function tape_equilibrium(A: number[]): number {
  const totalSum = A.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  let minDiff = Infinity;

  for (let P = 0; P < A.length - 1; P++) {
    leftSum += A[P];
    const rightSum = totalSum - leftSum;
    const diff = Math.abs(leftSum - rightSum);

    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

// Optimal Solution: Prefix Sum Approach (O(N) Time, O(1) Space)
// Instead of recalculating sums for each split P, we use prefix sums efficiently:
//
// Compute Total Sum of Array (totalSum)
// This is the sum of all elements in A.
// Iterate and Track leftSum & rightSum
// Start with leftSum = 0, then add elements one by one.
// rightSum = totalSum - leftSum
// Compute |leftSum - rightSum| at each step.
// Keep Track of Minimum Difference
// Update minDiff whenever a new smaller difference is found.

// Why This Works Efficiently
// Total Sum Calculation (O(N))
// The first pass computes totalSum in O(N).
// Single Pass for Differences (O(N))
// We iterate once (O(N)) while keeping track of leftSum and rightSum.
// ✅ Time Complexity: O(N) (Single loop through A)
// ✅ Space Complexity: O(1) (Only a few variables used)
//
// This approach is optimal for large inputs (N ≤ 100,000). 🚀
