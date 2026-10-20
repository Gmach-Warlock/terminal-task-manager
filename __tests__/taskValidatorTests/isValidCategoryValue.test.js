import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidCategoryValue } from "../../src/controller/tasks/taskValidator.js";

describe("isValidCategoryValue", () => {
  it("should return false if the category value is not a valid status value, or priority value", () => {
    assert.strictEqual(isValidCategoryValue("wrong"), false);
  });
  it("should return true if a good value is entered", () => {
    assert.strictEqual(isValidCategoryValue("complete"), true);
    assert.strictEqual(isValidCategoryValue("incomplete"), true);
    assert.strictEqual(isValidCategoryValue("all"), true);
    assert.strictEqual(isValidCategoryValue("low"), true);
    assert.strictEqual(isValidCategoryValue("medium"), true);
    assert.strictEqual(isValidCategoryValue("high"), true);
  });
});
