<div align="center">
  <img src="https://oss.xiaohe.ink/images/magic-sort.png" width="160" alt="logo"/>
  <h1>Magic Sort</h1>
  <span>🤓 A fast and magical sort library, powered by luck</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

English | [简体中文](./readme/README.zh-CN.md)

> [!WARNING]
> 🚨 This is an entertainment project, do **not** use it in production!
> The author is **not responsible** for any losses caused!

## 🎉 Features

- 🪄 A variety of magical sorting algorithms
- 🎈 Friendly API design
- 🧀 Full TypeScript support
- 🧪 Complete unit testing
- 👌 No framework restrictions

## 🚁 Installation

```shell
# pnpm
pnpm add magic-sort

# yarn
yarn add magic-sort

# npm
npm install magic-sort
```

## 🛹 Usage

```javascript
import { bogoSort } from "magic-sort";

const array = [1, 3, 5, 2, 4];

bogoSort(array); // array -> [1,2,3,4,5]
bogoSort(array, (a, b) => b - a); // array -> [5,4,3,2,1]
```

## 📖 API

### bogoSort

> "If you let a monkey randomly hit keys on a typewriter for an infinite amount of time,
it will almost surely type out any given text, such as the complete works of Shakespeare."

```ts
type CompareFunc<T> = (a: T, b: T) => number;

function bogoSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

Randomly shuffles the given array. When the number of shuffles approaches infinity,
it will almost surely result in a correctly sorted state of the array.

- `bogoSort` **modifies the original array**.

### quantumSort

> "Observing a quantum in a superposition causes the collapse of that state,
making the quantum exhibit only particle-like properties.
This theory suggests that each observation splits the universe into countless parallel universes,
each with a definite state."

```ts
function quantumSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

1. Quantum-randomize the given array, this process divides the universe into multiple universes,
   each containing one possible permutation of the array;
2. Observe each universe, if the array within is not sorted, destroy that universe;
3. The remaining universes contain only sorted arrays.

- `quantumSort` **may or may not modify the original array**.
- Unfortunately, `quantumSort` is **not implemented**, and will only throw an `Error`.

### sleepSort

> "Each number sleeps, and when they awaken at their own time, the world shall know their order."

```ts
function sleepSort(array: number[]): Promise<number[]>;
```

Each number in the array is assigned a delay time proportional to its value,
allowing smaller numbers to "wake up" earlier and be added to the result array first.
As all the numbers awaken one by one, a sorted array in ascending order emerges,
as if they chose the correct order on their own.

- `sleepSort` **doesn't modify the original array**.
- `sleepSort` **only supports arrays of `number` type**, and returns a `Promise`.

### miracleSort

> "In space environments, there are large amounts of high-energy charged particles.
CMOS electronic components in computers can be affected by Earth's magnetic field,
cosmic rays, and other radiation, causing bit flips, turning 0 into 1, or 1 into 0."

```ts
function miracleSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

Keep checking the array’s state... and wait for a miracle to happen!

- `miracleSort` **modifies the original array**.

### divineSort

> "To exist is to be justified — the array’s order is beyond question."

```ts
function divineSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

Its very existence proves its correctness. The array has already been sorted in the best possible way,
transcending our mortal understanding of what 'sorting' means. The array has achieved salvation.

- `divineSort` **doesn't modify the original array**.
- `divineSort` **doesn't support a custom `compareFunc`** — if provided, it will throw an `Error`,
  because the divine will is not subject to mortal interference.

### quickSort

```ts
function quickSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

Yes, this is a serious and legitimate implementation of the quicksort algorithm, **used for benchmarking**.

- `quickSort` **modifies the original array**.

## 🍬 Thanks

This project was inspired by [人类奇葩排序算法鉴赏 - 哔哩哔哩](https://www.bilibili.com/video/BV1nJBTYoEQm).

## 🏆 License

MIT [LICENSE](./LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/magic-sort?style=flat&color=fb7964&labelColor=18181b&logo=github
[github-stars-href]: https://github.com/xiaohe0601/magic-sort
[npm-version-src]: https://img.shields.io/npm/v/magic-sort?style=flat&color=fb7964&labelColor=18181b&logo=npm
[npm-version-href]: https://npmjs.com/package/magic-sort
[npm-downloads-src]: https://img.shields.io/npm/dm/magic-sort?style=flat&color=fb7964&labelColor=18181b
[npm-downloads-href]: https://npmjs.com/package/magic-sort
[bundle-src]: https://img.shields.io/bundlephobia/minzip/magic-sort?style=flat&color=fb7964&labelColor=18181b&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=magic-sort
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-fb7964?style=flat&labelColor=18181b
[jsdocs-href]: https://www.jsdocs.io/package/magic-sort
[license-src]: https://img.shields.io/github/license/xiaohe0601/magic-sort.svg?style=flat&color=fb7964&labelColor=18181b
[license-href]: https://github.com/xiaohe0601/magic-sort/blob/main/LICENSE