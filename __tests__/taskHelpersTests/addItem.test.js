import { describe, it } from "node:test";
import assert from "node:assert";
import { addItem } from "../../src/controller/tasks/taskHelpers.js";

describe("addItem", () => {
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
    assert.strictEqual(addItem(array), undefined);
    assert.strictEqual(addItem(newItem), undefined);
  });
  it("should add the item to the array if it doesn't exist or replace the item in the array that has the same title with the new item", () => {
    const array = [
      { title: "Title 1", description: "Description 1", priority: "low" },
      { title: "Title 2", description: "Description 2", priority: "medium" },
    ];
    const newItem = {
      title: "Title 3",
      description: "Description 3",
      priority: "high",
    };
    const edittedItem = {
      title: "Title 1",
      description: "New Description 1",
      priority: "low",
    };
    assert.deepStrictEqual(addItem(array, newItem), [
      { title: "Title 1", description: "Description 1", priority: "low" },
      { title: "Title 2", description: "Description 2", priority: "medium" },
      { title: "Title 3", description: "Description 3", priority: "high" },
    ]);
    assert.deepStrictEqual(addItem(array, edittedItem), [
      { title: "Title 1", description: "New Description 1", priority: "low" },
      { title: "Title 2", description: "Description 2", priority: "medium" },
    ]);
  });
});
