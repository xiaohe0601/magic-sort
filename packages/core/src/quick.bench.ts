import { bench, describe } from "vitest";
import { quickSort } from "./quick";

describe("quickSort", () => {
  bench("length 3", () => {
    quickSort([1, 2, 3]);
    quickSort([3, 2, 1]);
    quickSort([1, 3, 2]);
    quickSort([3, 1, 2]);
  });

  bench("length 5", () => {
    quickSort([1, 2, 3, 4, 5]);
    quickSort([5, 4, 3, 2, 1]);
    quickSort([1, 3, 5, 2, 4]);
    quickSort([5, 3, 1, 4, 2]);
  });

  bench("length 10", () => {
    quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    quickSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
    quickSort([10, 8, 6, 4, 2, 9, 7, 5, 3, 1]);
  });
});