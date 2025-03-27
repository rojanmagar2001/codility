// A string S consisting of N characters is considered to be properly nested if any of the
// following conditions is true:
//
//         S is empty;
//         S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
//         S has the form "VW" where V and W are properly nested strings.
//
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.
//
// Write a function:
//
//     function solution(S: string): number;
//
// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0
// otherwise.
//
// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the
// function should return 0, as explained above.
//
// Write an efficient algorithm for the following assumptions:
//
//         N is an integer within the range [0..200,000];
//         string S is made only of the following characters: '(', '{', '[', ']', '}' and/or ')'.

export function brackets(S: string): number {
  const stack = [];

  const PAIRS: Record<string, string> = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  const OPEN_BRACKETS: string[] = Object.values(PAIRS);
  const CLOSE_BRACKETS: string[] = Object.keys(PAIRS);

  for (const char of S) {
    if (OPEN_BRACKETS.includes(char)) {
      stack.push(char);
    } else if (CLOSE_BRACKETS.includes(char)) {
      const paired = PAIRS[char];
      if (stack.pop() !== paired) {
        return 0;
      }
    } else {
      return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
