import { num_of_disc_intersection } from "./num_of_disc_intersections";

describe("Number of Disc Intersections", () => {
  test("Should return 11", () => {
    expect(num_of_disc_intersection([1, 5, 2, 1, 4, 0])).toEqual(11);

    expect(num_of_disc_intersection([1, 1, 1])).toEqual(3);

    expect(num_of_disc_intersection([])).toEqual(0);
  });
});
