import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidNumber } from "../../src/controller/tasks/taskValidator.js";

describe("isValidNumber", () => {
  it("should return false if a data entered is not a number", () => {
    const testValue = "String";
    assert.strictEqual(isValidNumber(testValue), false);
  });
  it("should return true if the data entered is a number", () => {
    const testValue = "1";
    assert.strictEqual(isValidNumber(testValue), true);
  });
});
