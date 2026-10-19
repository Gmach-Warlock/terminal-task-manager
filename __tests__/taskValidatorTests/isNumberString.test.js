import { describe, it } from "node:test";
import assert from "node:assert";
import { isNumberString } from "../../src/controller/tasks/taskValidator.js";

describe("isNumberString", () => {
  it("should return true if the string is comprised only of numbers", () => {
    assert.strictEqual(isNumberString("1234"), true);
  });
  it("should return false if the string has characters besides numbers in it", () => {
    assert.strictEqual(isNumberString("Test 1"), false);
  });
});
