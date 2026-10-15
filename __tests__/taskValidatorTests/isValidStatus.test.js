import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidStatus } from "../../src/controller/tasks/taskValidator.js";

describe("isValidStatus", () => {
  it("should return false if a status isn't provided", () => {
    assert.strictEqual(isValidStatus(), false);
  });
  it("should return false if the status provided isn't complete, incomplete, or all", () => {
    assert.strictEqual(isValidStatus("wrong"), false);
  });
  it("should return true if the status provided is one of the three correct options", () => {
    assert.strictEqual(isValidStatus("complete"), true);
    assert.strictEqual(isValidStatus("incomplete"), true);
    assert.strictEqual(isValidStatus("all"), true);
  });
});
