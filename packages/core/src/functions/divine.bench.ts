import { bench, describe } from "vitest";
import { divineSort } from "./divine";

describe("divineSort", () => {
  bench("length 3", () => {
    divineSort([1, 2, 3]);
    divineSort([3, 2, 1]);
    divineSort([1, 3, 2]);
    divineSort([3, 1, 2]);
  });

  bench("length 5", () => {
    divineSort([1, 2, 3, 4, 5]);
    divineSort([5, 4, 3, 2, 1]);
    divineSort([1, 3, 5, 2, 4]);
    divineSort([5, 3, 1, 4, 2]);
  });

  bench("length 10", () => {
    divineSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    divineSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    divineSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
    divineSort([10, 8, 6, 4, 2, 9, 7, 5, 3, 1]);
  });
});