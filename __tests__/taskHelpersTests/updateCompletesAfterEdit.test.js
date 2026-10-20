import { describe, it } from "node:test";
import assert from "node:assert";
import { toggleStats } from "../../src/controller/tasks/taskHelpers.js";

describe("toggleStats", () => {
  const taskCompletes = {
    completed: 2,
    notCompleted: 2,

    addComplete() {
      this.completed++;
    },
    subtractCompleted() {
      this.completed--;
    },
    addNotCompleted() {
      this.notCompleted++;
    },
    subtractNotCompleted() {
      this.notCompleted--;
    },
  };
  it("shouldn't update anything if one of the params is not provided or is of wrong type", () => {
    toggleStats(
      taskCompletes,
      taskCompletes.badFunction,
      taskCompletes.subtractCompleted,
    );
    assert.deepStrictEqual(taskCompletes.completed, 2);
    assert.deepStrictEqual(taskCompletes.notCompleted, 2);
  });
  it("should update the stats accordingly with the correct methods", () => {
    toggleStats(
      taskCompletes,
      taskCompletes.addComplete,
      taskCompletes.subtractNotCompleted,
    );
    assert.strictEqual(taskCompletes.completed, 3);
    assert.strictEqual(taskCompletes.notCompleted, 1);
    toggleStats(
      taskCompletes,
      taskCompletes.addNotCompleted,
      taskCompletes.subtractCompleted,
    );
    assert.strictEqual(taskCompletes.completed, 2);
    assert.strictEqual(taskCompletes.notCompleted, 2);
  });
});
