// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular
// if 0 ≤ P < Q < R < N and:
//
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
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
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [0..100,000];
// each element of array A is an integer within
// the range [−2,147,483,648..2,147,483,647].

export function triangle(A: number[]): number {
  const N = A.length;

  A = A.sort((a, b) => a - b);

  for (let i = 0; i < N - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return 1;
    }
  }

  return 0;
}

// To solve this problem efficiently, we can take advantage of the properties of a
// triangle and the fact that the sides of a triangle must satisfy the triangle
// inequality.
//
// Approach
// Sorting the Array: By sorting the array, we can reduce the problem to simply
// checking consecutive triplets in the sorted array. This is because once the array
// is sorted, the condition A[P] + A[Q] > A[R] is guaranteed for P < Q < R if the
// array is sorted.
// After sorting, we need to check whether for any three consecutive elements A[i],
// A[i+1], and A[i+2], the sum of the two smaller elements is greater than the
// largest element.
// Why Sorting Helps: In a sorted array, checking the triangular condition becomes
// simpler:
// If A[i] + A[i+1] > A[i+2] is true for any i, then
// the triplet (A[i], A[i+1], A[i+2]) forms a valid triangle.
// Time Complexity:
// Sorting the array: O(N log N)
// Checking consecutive triplets: O(N)
// Therefore, the overall time complexity is O(N log N).
