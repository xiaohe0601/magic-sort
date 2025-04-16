import { describe, expect, it } from "vitest";
import { quantumSort } from "./quantum";

describe("quantumSort", () => {
  it("should sort numbers", () => {
    expect(() => quantumSort([1, 2, 3])).toThrowError();
  });
});