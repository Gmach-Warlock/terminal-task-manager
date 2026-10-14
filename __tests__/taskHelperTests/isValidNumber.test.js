import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidNumber } from "../../src/controller/tasks/taskValidator.js";

describe("isValidNumber", () => {
  it("should return false if a data type other than number is entered", () => {
    const testValue = "1";
    assert.strictEqual(isValidNumber(testValue), false);
  });
  it("should return true if a the given data is a number", () => {
    const testValue = 1;
    assert.strictEqual(isValidNumber(testValue), true);
  });
});
