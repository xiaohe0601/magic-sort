import { describe, expect, it } from "vitest";
import { sleepSort } from "./sleep";

describe("sleepSort", () => {
  it("sort numbers", async () => {
    expect(await sleepSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("sorted array", async () => {
    expect(await sleepSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("empty array", async () => {
    expect(await sleepSort([])).toEqual([]);
  });
});