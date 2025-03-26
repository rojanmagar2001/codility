import { count_div } from "./count_div";

describe("Count Div Test", () => {
  test("Should return 3", () => {
    expect(count_div(6, 11, 2)).toEqual(3);
  });

  test("Should return 5", () => {
    expect(count_div(1, 11, 2)).toEqual(5);
  });
});
