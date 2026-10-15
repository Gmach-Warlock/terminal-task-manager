import { describe, it } from "node:test";
import assert from "node:assert";
import { deleteItem } from "../../src/controller/tasks/taskHelpers.js";

describe("deleteItem", () => {
  it("should early return with undefined if an array or item is not provided", () => {
    const array = [
      { title: "Title 1", description: "Description 1", priority: "low" },
      { title: "Title 2", description: "Description 2", priority: "medium" },
    ];
    const newItem = {
      title: "Title 3",
      description: "Description 3",
      priority: "high",
    };
    assert.strictEqual(deleteItem(array), undefined);
    assert.strictEqual(deleteItem(newItem), undefined);
  });
  it("should return the original array if the item doesn't exist in the array", () => {
    const array = [
      { title: "Title 1", description: "Description 1", priority: "low" },
      { title: "Title 2", description: "Description 2", priority: "medium" },
    ];
    const itmToDelete = {
      title: "Title 3",
      description: "Description 3",
      priority: "high",
    };
    assert.deepStrictEqual(deleteItem(array, itmToDelete), array);
  });
  it("should return a new array without the item if it exists in the original array", () => {
    const item = { title: "Title One" };
    const array = [item, { title: "Title Two" }];
    assert.deepStrictEqual(deleteItem(array, item), [{ title: "Title Two" }]);
  });
});
