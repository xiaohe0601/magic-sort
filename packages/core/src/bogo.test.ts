import { describe, expect, it } from "vitest";
import { bogoSort, shuffle } from "./bogo";

describe("shuffle", () => {
  it("shuffle array", () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];

    shuffle(array);

    expect(array).not.toEqual(originalArray);
    expect(array.sort()).toEqual(originalArray.sort());
  });

  it("empty array", () => {
    const array: unknown[] = [];
    const originalArray = [...array];

    shuffle(array);

    expect(array).toEqual(originalArray);
  });

  it("single element array", () => {
    const array = [1];
    const originalArray = [...array];

    shuffle(array);

    expect(array).toEqual(originalArray);
  });
});

describe("bogoSort", () => {
  it("sort numbers", () => {
    expect(bogoSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("sort strings", () => {
    expect(bogoSort(["c", "b", "a"])).toEqual(["a", "b", "c"]);
  });

  it("sort objects", () => {
    expect(bogoSort([{ a: 2 }, { a: 1 }, { a: 3 }], (a, b) => a.a - b.a))
      .toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  });

  it("sorted array", () => {
    expect(bogoSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("empty array", () => {
    expect(bogoSort([])).toEqual([]);
  });
});