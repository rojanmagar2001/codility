import { stone_wall } from "./stone_wall";

describe("Stacks & Queues: Stone Wall Test", () => {
  test("Should return 7", () => {
    expect(stone_wall([8, 8, 5, 7, 9, 8, 7, 4, 8])).toEqual(7);
  });
});
