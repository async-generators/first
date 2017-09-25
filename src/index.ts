import iterable from '@async-generators/iterable';

async function basic<T>(
  source: AsyncIterable<T> | Iterable<T>
): Promise<T | undefined> {
  for await (let item of iterable(source)) {
    return item;
  }
}

async function predicated<T>(
  source: AsyncIterable<T> | Iterable<T>,
  predicate: (item: T) => boolean
): Promise<T | undefined> {
  for await (let item of iterable(source)) {
    if (predicate(item)) { return item; }
  }
}

export default function <T>(
  source: AsyncIterable<T> | Iterable<T>
): Promise<T | undefined>
export default function <T>(
  source: AsyncIterable<T> | Iterable<T>,
  predicate: (item: T) => boolean
): Promise<T | undefined>
export default function <T>(
  source: AsyncIterable<T> | Iterable<T>,
  predicate?: (item: T) => boolean
): Promise<T | undefined> {
  if (predicate === undefined) {
    return basic(source);
  }
  return predicated(source, predicate);
}

