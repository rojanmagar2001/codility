import { fish } from "./fish";

describe("Stacks And Queues - Fish Test", () => {
  test("2 fish should be alive", () => {
    expect(fish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toEqual(2);
  });
});
