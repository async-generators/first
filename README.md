# first
![logo](https://avatars1.githubusercontent.com/u/31987273?v=4&s=100)

get the first (predicated) item from a source iterable

[![NPM version][npm-image]][npm-url]
[![Travis Status][travis-image]][travis-url]
[![Travis Status][codecov-image]][codecov-url]

## Usage

_package requires a system that supports async-iteration, either natively or via down-compiling_

### Install
```
npm install @async-generators/parallel --save
yarn add @async-generators/parallel
```

This package's `main` entry points to a `commonjs` distribution. 

Additionally, the `module` entry points to a `es2015` distribution, which can be used by build systems, such as webpack, to directly use es2015 modules. 

## Api

### first(source [,predicate])

<code>first()</code> iterates `source` and returns the first item where `predicate(item) == true`. if `predicate` is `undefined` then it simply returns the first item. if `source` contains no items, or `predicate()` always returns false, then `first()` returns `undefined`.

`source` must have a `[Symbol.asyncIterator]` or `[Symbol.iterator]` property. If both are present only `[Symbol.asyncIterator]` is used. 

## Example

example.js
```js
const first = require('@async-generators/first').default;

async function* source() {
  yield 1; yield 2; yield 3; yield 4;
}

async function main() {
  console.log(await first(source(), x => x > 1));
}

main();

```

Execute with the latest node.js: 

```
node --harmony-async-iteration example.js
```

output:
```
2
```
## Typescript

This library is fully typed and can be imported using: 

```ts
import first from '@async-generators/first');
```

It is also possible to directly execute your [properly configured](https://stackoverflow.com/a/43694282/1657476) typescript with [ts-node](https://www.npmjs.com/package/ts-node):

```
ts-node --harmony_async_iteration example.ts
```

[npm-url]: https://npmjs.org/package/@async-generators/first
[npm-image]: https://img.shields.io/npm/v/@async-generators/first.svg
[npm-downloads]: https://img.shields.io/npm/dm/@async-generators/first.svg
[travis-url]: https://travis-ci.org/async-generators/first
[travis-image]: https://img.shields.io/travis/async-generators/first/master.svg
[codecov-url]: https://codecov.io/gh/async-generators/first
[codecov-image]: https://codecov.io/gh/async-generators/first/branch/master/graph/badge.svg
