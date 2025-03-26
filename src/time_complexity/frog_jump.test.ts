import { frog_jump } from "./frog_jump";

describe("Frog Jump Test", () => {
  test("Returns 3", () => {
    expect(frog_jump(10, 85, 30)).toEqual(3);
  });
});
