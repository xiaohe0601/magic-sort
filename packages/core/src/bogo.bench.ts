import { bench, describe } from "vitest";
import { bogoSort } from "./bogo";

describe("bogoSort", () => {
  bench("length 3", () => {
    bogoSort([1, 2, 3]);
    bogoSort([3, 2, 1]);
    bogoSort([1, 3, 2]);
    bogoSort([3, 1, 2]);
  });

  bench("length 5", () => {
    bogoSort([1, 2, 3, 4, 5]);
    bogoSort([5, 4, 3, 2, 1]);
    bogoSort([1, 3, 5, 2, 4]);
    bogoSort([5, 3, 1, 4, 2]);
  });

  bench("length 10", () => {
    bogoSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    bogoSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    bogoSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
    bogoSort([10, 8, 6, 4, 2, 9, 7, 5, 3, 1]);
  });
});