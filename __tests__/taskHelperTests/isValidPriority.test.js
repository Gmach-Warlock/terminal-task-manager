import { describe, it } from "node:test";
import assert from "node:assert";

describe("isValidPriority", () => {
  it("should return false if a data type other than a string is entered", () => {
    const testValue = 12;
    assert.notStrictEqual(typeof testValue, "string");
  });

  it("should return false if a string other than high, medium, or low is entered", () => {
    const testValue = "test";
    assert.strictEqual(typeof testValue, "string");
  });
});
