import { brackets } from "./brackets";

describe("Brackets Test (Valid Parantheses)", () => {
  test("Returns 1", () => {
    expect(brackets("[{()}]")).toEqual(1);
  });

  test("Returns 0", () => {
    expect(brackets("[{()}"));
  });
});
