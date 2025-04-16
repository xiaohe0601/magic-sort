import { describe, expect, it } from "vitest";
import { defaultCompareFunc, isSorted } from "./shard";

describe("defaultCompareFunc", () => {
  it("equal values", () => {
    expect(defaultCompareFunc(1, 1)).toBe(0);
    expect(defaultCompareFunc("a", "a")).toBe(0);
    expect(defaultCompareFunc(true, true)).toBe(0);
    expect(defaultCompareFunc({ a: 1 }, { a: 1 })).toBe(0);
  });

  it("a less than b", () => {
    expect(defaultCompareFunc(1, 2)).toBeLessThan(0);
    expect(defaultCompareFunc("a", "b")).toBeLessThan(0);
    expect(defaultCompareFunc(false, true)).toBeLessThan(0);
    expect(defaultCompareFunc({ a: 1 }, { a: 2 })).toBeLessThan(0);
  });

  it("a greater than b", () => {
    expect(defaultCompareFunc(2, 1)).toBeGreaterThan(0);
    expect(defaultCompareFunc("b", "a")).toBeGreaterThan(0);
    expect(defaultCompareFunc(true, false)).toBeGreaterThan(0);
    expect(defaultCompareFunc({ a: 2 }, { a: 1 })).toBeGreaterThan(0);
  });

  it("different types", () => {
    expect(defaultCompareFunc(1, "a")).toBeLessThan(0);
    expect(defaultCompareFunc("a", 1)).toBeGreaterThan(0);
  });
});

describe("isSorted", () => {
  it("sorted array", () => {
    expect(isSorted([1, 2, 3], defaultCompareFunc)).toBe(true);
    expect(isSorted(["a", "b", "c"], defaultCompareFunc)).toBe(true);
    expect(isSorted([false, true], defaultCompareFunc)).toBe(true);
    expect(isSorted([{ a: 1 }, { a: 2 }], defaultCompareFunc)).toBe(true);
  });

  it("unsorted array", () => {
    expect(isSorted([3, 2, 1], defaultCompareFunc)).toBe(false);
    expect(isSorted(["c", "b", "a"], defaultCompareFunc)).toBe(false);
    expect(isSorted([true, false], defaultCompareFunc)).toBe(false);
    expect(isSorted([{ a: 2 }, { a: 1 }], defaultCompareFunc)).toBe(false);
  });
});