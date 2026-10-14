import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidSortType } from "../../src/controller/tasks/taskValidator.js";

describe("isValidSortType", () => {
  it("should return false if no type is provided", () => {
    assert.strictEqual(isValidSortType(), false);
  });
  it("should return false if the type isn't newest, oldest, low, or high", () => {
    assert.strictEqual(isValidSortType("wrong"), false);
  });
  it("should return true if the given type is one of the correct values", () => {
    assert.strictEqual(isValidSortType("low"), true);
  });
});
