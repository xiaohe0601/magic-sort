import type { CompareFunc } from "../types";

export function defaultCompareFunc(a: unknown, b: unknown): number {
  if (a === b) {
    return 0;
  }

  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  }

  if (typeof a === "boolean" && typeof b === "boolean") {
    return Number(a) - Number(b);
  }

  if (typeof a === "object" && typeof b === "object") {
    return JSON.stringify(a).localeCompare(JSON.stringify(b));
  }

  return String(a).localeCompare(String(b));
}

export function isSorted<T>(array: T[], compareFunc: CompareFunc<T>): boolean {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (compareFunc(array[i], array[i + 1]) > 0) {
      return false;
    }
  }

  return true;
}