import { describe, expect, it } from "vitest";
import { divineSort } from "./divine";

describe("divineSort", () => {
  it("normal", () => {
    expect(divineSort([1, 3, 2])).toEqual([1, 3, 2]);
  });

  it("reject compareFunc", () => {
    expect(() => divineSort([1, 2, 3], (a, b) => a - b)).toThrowError();
  });
});