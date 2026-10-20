import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidObject } from "../../src/controller/tasks/taskValidator.js";

describe("isValidObject", () => {
  it("should return false if it is not an object. An array is not included here", () => {
    assert.strictEqual(isValidObject("string"), false);
    assert.strictEqual(isValidObject(1), false);
    assert.strictEqual(isValidObject([]), false);
  });
  it("should return true if an object is provided", () => {
    assert.strictEqual(isValidObject({ title: "Good Object" }), true);
  });
});
