// The goal is to rotate array A K times; that is, each element of A will be shifted to
// the right K times.
//
// Write a function:
//
//     function solution(A: number[], K: number): number[];
//
// that, given an array A consisting of N integers and an integer K, returns the array A
// rotated K times.
//
// For example, given
//     A = [3, 8, 9, 7, 6]
//     K = 3
//
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:
//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
//
// For another example, given
//     A = [0, 0, 0]
//     K = 1
//
// the function should return [0, 0, 0]
//
// Given
//     A = [1, 2, 3, 4]
//     K = 4
//
// the function should return [1, 2, 3, 4]
//
// Assume that:
//
//         N and K are integers within the range [0..100];
//         each element of array A is an integer within the range [−1,000..1,000].
//
// In your solution, focus on correctness. The performance of your solution will not be
// the focus of the assessment.

export function rotate_array(A: number[], K: number): number[] {
  const N = A.length;
  if (K === 0) return A;

  K = K % N; // Optimize K to avoid unnecessary full rotations
  if (K === 0) return A;

  return [...A.slice(-K), ...A.slice(0, N - K)];
}

// Explanation:
//
//     Handle edge case: If the array is empty, return it immediately.
//
//     Optimize rotations: Since rotating an array NN times results in the same array, we compute K % N to reduce unnecessary rotations.
//
//     Perform rotation efficiently:
//
//         Use A.slice(-K) to get the last KK elements.
//
//         Use A.slice(0, N - K) to get the first N−KN−K elements.
//
//         Concatenate both parts to form the rotated array.
//
// Complexity:
//
//     Time Complexity: O(N)O(N) (slicing and concatenation are linear).
//
//     Space Complexity: O(N)O(N) (a new array is created).
