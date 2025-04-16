/**
 * > "Each number sleeps, and when they awaken at their own time, the world shall know their order."
 *
 * Each number in the array is assigned a delay time proportional to its value,
 * allowing smaller numbers to "wake up" earlier and be added to the result array first.
 * As all the numbers awaken one by one, a sorted array in ascending order emerges,
 * as if they chose the correct order on their own.
 */
export function sleepSort(array: number[]): Promise<number[]> {
  const result: number[] = [];

  const promises = array.map((it) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        result.push(it);
        resolve();
      }, it * 10);
    });
  });

  return Promise.all(promises).then(() => result);
}