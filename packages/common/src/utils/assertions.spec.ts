import { describe, expect, it, vi } from "vitest";
import {
  assert,
  assertInstanceOf,
  assertTypeOf,
  isEmpty,
  isFalsy,
  isTruthy,
  some
} from "./assertions";

describe("assert() function", () => {
  const a = 1;
  const b = 2;

  it("Should not throw if condition is met", () => {
    expect(() => assert(a + b == 3, "error message in case of failure")).not.to.throw;
  });

  it("Should throw if condition is not met", () => {
    expect(() => assert(a + b > 3, "string error msg")).to.throw("string error msg");
    expect(() => assert(a + b > 3, new Error("Error instance msg"))).to.throw("Error instance msg");
    expect(() => assert(a + b > 3, () => "function error msg")).to.throw("function error msg");
  });

  it("Should lazily build error message", () => {
    const errorMsgMock = { getErrorMsg: () => "error msg test" };
    const mock = vi.spyOn(errorMsgMock, "getErrorMsg");

    expect(() => assert(a + b === 3, errorMsgMock.getErrorMsg)).not.to.throw;
    expect(mock).not.toBeCalled();

    expect(() => assert(a + b > 3, errorMsgMock.getErrorMsg)).to.throw("error msg test");
    expect(mock).toBeCalledTimes(1);
  });
});

describe("assertTypeOf() function", () => {
  it("Should not throw if condition is met", () => {
    expect(() => assertTypeOf(429, "number")).not.to.throw;
    expect(() => assertTypeOf("test", "string")).not.to.throw;
    expect(() => assertTypeOf({}, "object")).not.to.throw;
    expect(() => assertTypeOf(1n, "bigint")).not.to.throw;
  });

  it("Should throw if condition is not met", () => {
    expect(() => assertTypeOf(429, "string")).to.throw(
      "Expected an object of type 'string', got 'number'."
    );
    expect(() => assertTypeOf("test", "bigint")).to.throw(
      "Expected an object of type 'bigint', got 'string'."
    );
    expect(() => assertTypeOf({}, "function")).to.throw(
      "Expected an object of type 'function', got 'object'."
    );
    expect(() => assertTypeOf(1n, "undefined")).to.throw(
      "Expected an object of type 'undefined', got 'bigint'."
    );
  });
});

describe("assertInstanceOf() function", () => {
  it("Should not throw if condition is met", () => {
    expect(() => {
      assertInstanceOf(Uint8Array.from([2]), Uint8Array);
    }).not.to.throw;
    expect(() => {
      assertInstanceOf([], Array);
    }).not.to.throw;
    expect(() => {
      assertInstanceOf("", String);
    }).not.to.throw;
    expect(() => {
      assertInstanceOf(() => "", Function);
    }).not.to.throw;
  });

  it("Should throw if condition is not met", () => {
    expect(() => {
      assertInstanceOf(Uint16Array.from([2]), Uint8Array);
    }).to.throw("Expected an instance of 'Uint8Array', got 'Uint16Array'");
    expect(() => {
      assertInstanceOf([], BigInt);
    }).to.throw("Expected an instance of 'BigInt', got 'Array'");
    expect(() => {
      assertInstanceOf(undefined, Boolean);
    }).to.throw("Expected an instance of 'Boolean', got 'undefined'");
    expect(() => {
      assertInstanceOf(() => true, String);
    }).to.throw("Expected an instance of 'String', got 'Function'.");
    expect(() => {
      assertInstanceOf(null, String);
    }).to.throw("Expected an instance of 'String', got 'null'.");
  });
});

describe("Assertions isTruthy and isFalsy assertions", () => {
  const truthy = [true, 1, 1n, [], {}, [1]];
  const falsy = [false, 0, 0n, null, undefined, NaN];

  it("Should return true for truthy inputs", () => {
    expect(truthy.every((val) => isTruthy(val))).to.be.true;
    expect(falsy.every((val) => isTruthy(val))).to.be.false;

    expect(falsy.filter(isTruthy)).to.be.deep.equal([]);
  });

  it("Should return false for falsy inputs", () => {
    expect(falsy.every((val) => isFalsy(val))).to.be.true;
    expect(truthy.every((val) => isFalsy(val))).to.be.false;

    expect(truthy.filter(isFalsy)).to.be.deep.equal([]);
  });
});

describe("isEmpty() guard", () => {
  it("Should return true if array is undefined or empty", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it("Should return true if object contains no props", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("Should return false if object contains at least one prop", () => {
    expect(isEmpty({ test: undefined })).toBe(false);
    expect(isEmpty({ foo: true, bar: false })).toBe(false);
  });

  it("Should return false if array contains elements", () => {
    expect(isEmpty([1, 2, 4])).toBe(false);
    expect(isEmpty([1])).toBe(false);
  });
});

describe("some() guard", () => {
  it("Should return false if array is undefined or empty", () => {
    expect(some([])).toBe(false);
    expect(some(undefined)).toBe(false);
  });

  it("Should return false if object contains no props", () => {
    expect(some({})).toBe(false);
  });

  it("Should return true if object contains at least one prop", () => {
    expect(some({ test: undefined })).toBe(true);
    expect(some({ foo: true, bar: false })).toBe(true);
  });

  it("Should return true if array contains elements", () => {
    expect(some([1, 2, 4])).toBe(true);
    expect(some([1])).toBe(true);
  });
});
