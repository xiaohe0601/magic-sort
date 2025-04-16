import type { CompareFunc } from "./types";

/**
 * > "To exist is to be justified — the array’s order is beyond question."
 *
 * Its very existence proves its correctness. The array has already been sorted in the best possible way,
 * transcending our mortal understanding of what 'sorting' means. The array has achieved salvation.
 */
export function divineSort<T>(
  array: T[],
  compareFunc?: CompareFunc<T>
): T[] {
  if (compareFunc != null) {
    throw new Error("Divine sort rejects the human compareFunc, the will is divine.");
  }

  return array;
}