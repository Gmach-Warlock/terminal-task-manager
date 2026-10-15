import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidCategory } from "../../src/controller/tasks/taskValidator.js";

describe("isValidCategory", () => {
  it("should return false if a parameter is not provided", () => {
    assert.strictEqual(isValidCategory(), false);
  });
  it("should return false if the category is not completed or priority", () => {
    assert.strictEqual(isValidCategory("bad"), false);
  });
  it("should return true if category is completed or priority", () => {
    assert.strictEqual(isValidCategory("completed"), true);
    assert.strictEqual(isValidCategory("priority"), true);
  });
});
