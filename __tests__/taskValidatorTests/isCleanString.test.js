import { describe, it } from "node:test";
import assert from "node:assert";
import { isCleanString } from "../../src/controller/tasks/taskValidator.js";

describe("isCleanString", () => {
  it("should return false if the inputted value is not of type string", () => {
    const testValue = 4;
    assert.strictEqual(isCleanString(testValue), false);
  });

  it("should return false if there is html in the string", () => {
    const testValue = "String <h1>I hack </h1>";
    assert.strictEqual(isCleanString(testValue), false);
  });

  it("should return true if the inputted value is of type string", () => {
    const testValue = "I am a string";
    assert.strictEqual(isCleanString(testValue), true);
  });
});
