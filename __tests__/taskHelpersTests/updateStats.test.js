import { describe, it } from "node:test";
import assert from "node:assert";
import { updateStats } from "../../src/controller/tasks/taskHelpers.js";

describe("updateStats", () => {
  function createNewStats() {
    return {
      total: 0,
      size: 0,

      addTaskTotals() {
        this.total++;
        this.size++;
      },
      removeTaskTotals() {
        this.size--;
      },
    };
  }
  it("should early return undefined if all of the params are not provided", () => {
    const stats = createNewStats();
    assert.strictEqual(updateStats(stats), undefined);
  });
  it("should early return undefined if storeMethod is not addTaskTotals or removeTaskTotals", () => {
    const stats = createNewStats();
    assert.strictEqual(updateStats(stats, stats.wrongMethod), undefined);
  });
  it("should properly execute the correct method based on the type", () => {
    const stats = createNewStats();
    updateStats(stats, stats.addTaskTotals);
    assert.strictEqual(stats.size, 1);
    assert.strictEqual(stats.total, 1);
    updateStats(stats, stats.removeTaskTotals);
    assert.strictEqual(stats.size, 0);
    assert.strictEqual(stats.total, 1);
  });
});
