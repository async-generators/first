import first from '../src';
import { expect } from 'chai';

describe("@async-generator/first", () => {
  it("should return nothing with empty source", async () => {
    let source = async function* () { }
    let expected = undefined;
    let result = await first(source());

    expect(result).to.be.eq(expected);
  });

  it("should return first item from source", async () => {
    let source = async function* () { yield 1; yield 2;}
    let expected = 1;
    let result = await first(source());

    expect(result).to.be.eq(expected);
  });

  it("should return nothing with empty source using predicate", async () => {
    let source = async function* () { }
    let expected = undefined;
    let result = await first(source(), () => true);

    expect(result).to.be.eq(expected);
  });

  it("should return nothing using always false predicate", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = undefined;
    let result = await first(source(), () => false);

    expect(result).to.be.eq(expected);
  });

  it("should return first item when using always true predicate", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = 1;
    let result = await first(source(), () => true);

    expect(result).to.be.eq(expected);
  });

  it("should return only item when predicate is true", async () => {
    let source = async function* () {
      yield 1; yield 2; yield 3; yield 4;
    }
    let expected = 3;
    let result = await first(source(), (x) => x == expected);

    expect(result).to.be.eq(expected);
  });
})
