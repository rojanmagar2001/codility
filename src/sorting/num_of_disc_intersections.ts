// We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of
// N non-negative integers, specifying the radiuses of the discs, is given. The J-th
// disc is drawn with its center at (J, 0) and radius A[J].
//
// We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th
// discs have at least one common point (assuming that the discs contain their borders).
//
// The figure below shows discs drawn for N = 6 and A as follows:
//
//   A[0] = 1
//   A[1] = 5
//   A[2] = 2
//   A[3] = 1
//   A[4] = 4
//   A[5] = 0
//
//
// There are eleven (unordered) pairs of discs that intersect, namely:
//
// discs 1 and 4 intersect, and both intersect with all the other discs;
// disc 2 also intersects with discs 0 and 3.
// Write a function:
//
// function solution(A: number[]): number;
// that, given an array A describing N discs as explained above, returns the number
// of (unordered) pairs of intersecting discs. The function should return −1 if the
// number of intersecting pairs exceeds 10,000,000.
//
// Given array A shown above, the function should return 11, as explained above.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [0..2,147,483,647].

export function num_of_disc_intersection(A: number[]): number {
  const MAX_INTERSECTIONS_LIMIT = 10_000_000;
  const N = A.length;

  if (N === 0) return 0;

  // Creating arrays to track disc start and end points.
  const starts: number[] = new Array(N).fill(0);
  const ends: number[] = new Array(N).fill(0);

  // Calculating start and end points for each disc.
  for (let i = 0; i < N; i++) {
    const left = Math.max(0, i - A[i]);
    const right = Math.min(N - 1, i + A[i]);

    starts[left]++;
    ends[right]++;
  }

  let activeDiscs = 0;
  let intersections = 0;

  // Count intersections by sweeping through the points.
  for (let i = 0; i < N; i++) {
    // Add the number of discs that start at this point
    if (starts[i] > 0) {
      // Each existing active disc will intersect with the new discs starting here
      intersections += activeDiscs * starts[i];

      // Additional intersections between new discs
      intersections += (starts[i] * (starts[i] - 1)) / 2;

      // Update active discs
      activeDiscs += starts[i];
    }

    // Remove discs that end at this point
    activeDiscs -= ends[i];

    // Check if the intersections exceeds 10 million
    if (intersections > MAX_INTERSECTIONS_LIMIT) {
      return -1;
    }
  }

  return intersections;
}
