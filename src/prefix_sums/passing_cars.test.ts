import { passing_cars } from "./passing_cars";

describe("Passing Cars Test", () => {
  test("Returns 5", () => {
    expect(passing_cars([0, 1, 0, 1, 1])).toEqual(5);
  });
});
