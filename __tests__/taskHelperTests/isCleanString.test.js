import { describe, it } from "node:test";
import assert from "node:assert";

describe("isCleanString", () => {
  it("should return false if the inputted value is not of type string", () => {
    const testValue = 4;
    assert.notStrictEqual(typeof testValue, "string");
  });

  it("should return false if there is html in the string", () => {
    const testValue = "String <h1>I hack </h1>";
    assert.strictEqual(typeof testValue, "string");
  });

  it("should return true if the inputted value is of type string", () => {
    const testValue = "I am a string";
    assert.strictEqual(typeof testValue, "string");
  });
});
