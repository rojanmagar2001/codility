import { nesting } from "./nesting";

describe("Stacks And Queues: Nesting Test", () => {
  test("Should be valid nesting", () => {
    expect(nesting("(()(())())")).toEqual(1);
  });

  test("Shouldn't be valid nesting", () => {
    expect(nesting("())")).toEqual(0);
  });
});
