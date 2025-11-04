import { bench, describe } from "vitest";
import { sleepSort } from "./sleep";

describe("sleepSort", () => {
  bench("length 3", () => {
    sleepSort([1, 2, 3]);
    sleepSort([3, 2, 1]);
    sleepSort([1, 3, 2]);
    sleepSort([3, 1, 2]);
  });

  bench("length 5", () => {
    sleepSort([1, 2, 3, 4, 5]);
    sleepSort([5, 4, 3, 2, 1]);
    sleepSort([1, 3, 5, 2, 4]);
    sleepSort([5, 3, 1, 4, 2]);
  });

  bench("length 10", () => {
    sleepSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    sleepSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    sleepSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
    sleepSort([10, 8, 6, 4, 2, 9, 7, 5, 3, 1]);
  });
});