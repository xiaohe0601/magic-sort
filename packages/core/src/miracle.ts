import { defaultCompareFunc, isSorted } from "./shard";
import type { CompareFunc } from "./types";

/**
 * > "In space environments, there are large amounts of high-energy charged particles.
 * CMOS electronic components in computers can be affected by Earth's magnetic field,
 * cosmic rays, and other radiation, causing bit flips, turning 0 into 1, or 1 into 0."
 *
 * Keep checking the array’s state... and wait for a miracle to happen!
 */
export function miracleSort<T>(
  array: T[],
  compareFunc: CompareFunc<T> = defaultCompareFunc
): T[] {
  while (!isSorted(array, compareFunc)) {
    // Waiting for a miracle...
  }

  return array;
}