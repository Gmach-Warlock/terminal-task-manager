import test, { describe, it } from "node:test";
import assert from "node:assert";
import { isOkToToggleInStore } from "../../src/controller/tasks/taskValidation.js";

describe("isOkToToggleInStore", () => {
  const testStore = {
    completed: 0,
    notCompleted: 0,
  };
  const testItem = {
    title: "Task 1",
    description: "Desc 1",
    completed: false,
  };
  it("should return false if any of the params are of the wrong type", () => {
    assert.strictEqual(isOkToToggleInStore([], testItem, false), false);
    assert.strictEqual(isOkToToggleInStore(testStore, 2, false), false);
    assert.strictEqual(
      isOkToToggleInStore(testStore, testItem, "false"),
      false,
    );
  });
  it("should return false if the task's completed property is the same boolean value provided", () => {
    assert.strictEqual(isOkToToggleInStore(testStore, testItem, false), false);
  });
  it("should return true if the completed value is different than the tasks current completed.", () => {
    assert.strictEqual(isOkToToggleInStore(testStore, testItem, true), true);
  });
});
