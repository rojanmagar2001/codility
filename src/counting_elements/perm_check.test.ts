import { perm_check } from "./perm_check";

describe("Frog River One Test", () => {
  test("Returns 1", () => {
    expect(perm_check([4, 1, 3, 2])).toEqual(1);
  });

  test("Returns 0", () => {
    expect(perm_check([4, 1, 3])).toEqual(0);
  });
});
