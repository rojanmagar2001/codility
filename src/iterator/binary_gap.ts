// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is
// surrounded by ones at both ends in the binary representation of N.
//
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains
// two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15
// has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
//
// Write a function:
//
// function solution(N: number): number;
//
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given
// N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//
// Write an efficient algorithm for the following assumptions:
//
//         N is an integer within the range [1..2,147,483,647].
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//

export function binary_gap(N: number): number {
  const binary = N.toString(2);

  if (binary.length === 0) return 0;

  let maxGap = 0;
  let currentGap = 0;
  let isInside: boolean = false;

  for (const char of binary) {
    if (char === "1") {
      if (isInside) {
        maxGap = Math.max(maxGap, currentGap);
        currentGap = 0;
      }
      isInside = true;
    } else {
      currentGap++;
    }
  }

  return maxGap;
}

// Explanation:
//
//     Convert N to its binary representation using N.toString(2).
//
//     Iterate over each character in the binary string:
//
//         If it's '1', update maxGap and reset currentGap if inside a gap.
//
//         If it's '0' and inside a gap, increment currentGap.
//
//     Return the maximum gap found.
//
// Complexity:
//
//     Time Complexity: O(log⁡N)O(logN) (since binary representation has at most 31
//     bits for a 32-bit integer).
//
//     Space Complexity: O(1)O(1) (only a few variables are used)
