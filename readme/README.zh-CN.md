<div align="center">
  <h1>Magic Sort</h1>
  <span>🤓 一个由运气驱动如魔法般快速的排序插件</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

xiaohe0601 / [github@xiaohe0601](https://github.com/xiaohe0601) / [gitee@xiaohe0601](https://gitee.com/xiaohe0601)

[English](../README.md) | 简体中文

> [!WARNING]
> 🚨 这是一个娱乐项目，请勿用于生产！由此造成的损失，作者概不负责！

## 🎉 特性

- 🪄 多种神奇的排序算法
- 🎈 友好的 API 设计
- 🧀 全面支持 TypeScript
- 🧪 完备的单元测试
- 👌 无框架限制

## 🚁 安装

```shell
# pnpm
pnpm add magic-sort

# yarn
yarn add magic-sort

# npm
npm install magic-sort
```

## 🛹 使用

```javascript
import { bogoSort } from "magic-sort";

const array = [1, 3, 5, 2, 4];

bogoSort(array); // array -> [1,2,3,4,5]
bogoSort(array, (a, b) => b - a); // array -> [5,4,3,2,1]
```

## 📖 API

### bogoSort 猴子排序

> “让一只猴子在打字机上随机地按键，当按键时间达到无穷时，几乎必然能够打出任何给定的文字，比如莎士比亚的全套著作。”

```typescript
type CompareFunc<T> = (a: T, b: T) => number;

function bogoSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

将给定数组随机进行打乱，当打乱次数达到无穷时，几乎必然能够得到一种状态，也就是数组元素被正确排序。

- `bogoSort` 会修改原数组。

### quantumSort 量子排序

> “当观测一个处于共存状态的量子时会引起共存状态的崩溃，从而使量子只显现粒子的性质。该理论认为观测时会分离出无数个平行宇宙，每一个宇宙都有一个确定的状态。”

```typescript
function quantumSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

1. 量子随机化给定数组，这个过程会将宇宙划分为包含数组所有可能排序方式的多个宇宙；
2. 观测每个宇宙，如果内部的数组没有排序，则将其销毁；
3. 剩余宇宙仅包含已排序数组。

- `quantumSort` 不确定会不会修改原数组。
- 不幸的是，`quantumSort` 目前并未实现，你只能得到一个 `Error` 。

### sleepSort 睡眠排序

> “每个数字都在沉睡，当它们在各自的时间醒来时，世界就会知道它们的顺序。”

```typescript
function sleepSort(array: number[]): Promise<number[]>;
```

为数组中的每个数字设置一个与其大小成正比的延迟时间，较小的数字会更早“醒来”并被加入结果数组。
随着所有数字依次苏醒，最终形成一个按升序排列的数组，它们自己选择了正确的顺序。

- `sleepSort` 不会修改原数组。
- `sleepSort` 仅支持 `number` 类型的数组，并且返回值是一个 `Promise` 。

### miracleSort 奇迹排序

> “在空间环境下存在着大量高能带电粒子，计算机中的CMOS电子元器件受到地球磁场、宇宙射线等照射，引起电位状态的跳变，0变成1，或者1变成0。”

```typescript
function miracleSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

持续检查数组状态，等待奇迹降临！

- `miracleSort` 会修改原数组。

### divineSort 神圣排序

> “存在即合理，数组的顺序不容置疑。”

```typescript
function divineSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

存在即合理，数组已经按照某种方式进行了最佳排序，这超越了我们对“排序”一词凡人般的理解，数组已得到救赎！

- `divineSort` 不会修改原数组。
- `divineSort` 不支持自定义 `compareFunc`，如果传入会抛出一个 `Error` ，因为神圣的意志不受凡人干扰。

### quickSort 快速排序

```typescript
function quickSort<T>(array: T[], compareFunc?: CompareFunc<T>): T[];
```

没错，这是一个正经的快速排序算法实现，用于基准测试。

- `quickSort` 会修改原数组。

## 🍬 鸣谢

项目灵感来源于 [人类奇葩排序算法鉴赏 - 哔哩哔哩](https://www.bilibili.com/video/BV1nJBTYoEQm) 。

## 🐶 讨论交流

- ❓：若有疑问或 BUG 反馈，可提交 [issues](https://github.com/xiaohe0601/magic-sort/issues)，也欢迎 PR
- 📫：[xiaohe0601@outlook.com](mailto:xiaohe0601@outlook.com)
- 🐧：暂未开通

## 🏆 开源协议

- MIT [LICENSE](../LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/magic-sort?style=flat&colorA=080f12&colorB=1fa669&logo=GitHub
[github-stars-href]: https://github.com/xiaohe0601/magic-sort
[npm-version-src]: https://img.shields.io/npm/v/magic-sort?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/magic-sort
[npm-downloads-src]: https://img.shields.io/npm/dm/magic-sort?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/magic-sort
[bundle-src]: https://img.shields.io/bundlephobia/minzip/magic-sort?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=magic-sort
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/magic-sort
[license-src]: https://img.shields.io/github/license/xiaohe0601/magic-sort.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/xiaohe0601/magic-sort/blob/main/LICENSE