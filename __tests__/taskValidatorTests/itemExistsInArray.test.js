import { describe, it } from "node:test";
import assert from "node:assert";
import { itemExistsInArray } from "../../src/controller/tasks/taskValidator.js";

describe("itemExistsInArray", () => {
  const testItem = {
    title: "Test Item",
    description: "Test Desc",
    priority: "low",
  };
  const goodArr = [testItem];
  it("should return false if one of the params is missing", () => {
    assert.strictEqual(itemExistsInArray(goodArr), false);
    assert.strictEqual(itemExistsInArray(testItem), false);
  });
});
