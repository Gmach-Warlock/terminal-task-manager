import { describe, it } from "node:test";
import assert from "node:assert";
import { Task } from "../../src/model/Task.js";
import { isOkToToggleInStore } from "../../src/controller/tasks/taskValidation.js";

describe("isOkToToggleInStore", () => {
  const testItem = new Task("Task 1", "Desc 1", "low");
  console.log("Testitem: ", testItem);
  it("should return false if any of the params are of the wrong type", () => {
    assert.strictEqual(isOkToToggleInStore(2, false), false);
    assert.strictEqual(isOkToToggleInStore(testItem, "false"), false);
  });
  it("should return false if the task's completed property is not the same boolean value provided", () => {
    assert.strictEqual(isOkToToggleInStore(testItem, true), false);
  });
  it("should return true if the completed value is the same as the tasks current completed.", () => {
    assert.strictEqual(isOkToToggleInStore(testItem, false), true);
  });
});
