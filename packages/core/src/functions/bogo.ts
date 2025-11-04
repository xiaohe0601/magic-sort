import type { CompareFunc } from "../types";
import { defaultCompareFunc, isSorted } from "./shard";

export function shuffle(array: unknown[]): void {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = (Math.random() * (i + 1)) | 0;

    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * > "If you let a monkey randomly hit keys on a typewriter for an infinite amount of time,
 * it will almost surely type out any given text, such as the complete works of Shakespeare."
 *
 * Randomly shuffles the given array. When the number of shuffles approaches infinity,
 * it will almost surely result in a correctly sorted state of the array.
 */
export function bogoSort<T>(
  array: T[],
  compareFunc: CompareFunc<T> = defaultCompareFunc
): T[] {
  while (!isSorted(array, compareFunc)) {
    shuffle(array);
  }

  return array;
}