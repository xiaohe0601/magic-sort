import { describe, expect, it } from "vitest";
import { quickSort } from "./quick";

describe("quickSort", () => {
  it("sort numbers", () => {
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("sort strings", () => {
    expect(quickSort(["c", "b", "a"])).toEqual(["a", "b", "c"]);
  });

  it("sort objects", () => {
    expect(quickSort([{ a: 2 }, { a: 1 }, { a: 3 }], (a, b) => a.a - b.a))
      .toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  });

  it("sorted array", () => {
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("empty array", () => {
    expect(quickSort([])).toEqual([]);
  });
});