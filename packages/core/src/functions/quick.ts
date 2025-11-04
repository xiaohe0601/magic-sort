import type { CompareFunc } from "../types";
import { defaultCompareFunc } from "./shard";

function partition<T>(
  array: T[],
  left: number,
  right: number,
  compareFunc: CompareFunc<T>
): number {
  const pivot = array[((left + right) / 2) | 0];

  while (left <= right) {
    while (compareFunc(array[left], pivot) < 0) {
      left += 1;
    }
    while (compareFunc(array[right], pivot) > 0) {
      right -= 1;
    }

    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];

      left += 1;
      right -= 1;
    }
  }

  return left;
}

function recursive<T>(
  array: T[],
  left: number,
  right: number,
  compareFunc: CompareFunc<T>
): void {
  if (left >= right) {
    return;
  }

  const index = partition(array, left, right, compareFunc);

  recursive(array, left, index - 1, compareFunc);
  recursive(array, index, right, compareFunc);
}

/**
 * Yes, this is a serious and legitimate implementation of the quicksort algorithm.
 */
export function quickSort<T>(
  array: T[],
  compareFunc: CompareFunc<T> = defaultCompareFunc
): T[] {
  recursive(array, 0, array.length - 1, compareFunc);

  return array;
}