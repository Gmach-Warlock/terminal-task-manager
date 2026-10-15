import { describe, it } from "node:test";
import assert from "node:assert";
import { editItem } from "../../src/controller/tasks/taskHelpers.js";

describe("editItem", () => {
  const arr = [
    { title: "Title 1", description: "Description 1", priority: "low" },
  ];
  it("should early return undefined if any of the parameters are missing", () => {
    assert.strictEqual(editItem(arr, "title 1", "priority"), undefined);
  });
  it("should early return undefined if any of the paramters are the wrong type", () => {
    assert.strictEqual(
      editItem({ title: "Bad Array" }, "Title <hack> 1", "priority", "dog"),
      undefined,
    );

    assert.strictEqual(
      editItem(arr, "Title <hack> 1", "priority", "dog"),
      undefined,
    );
    assert.strictEqual(editItem(arr, "Title 1", "wrong", "low"), undefined);
    assert.strictEqual(editItem(arr, "Title 1", "priority", "bad"), undefined);
  });
  it("should return early if there is no item with the title provided in the array provided", () => {
    assert.strictEqual(editItem(arr, "Wrong", "priority", "low"), undefined);
  });
});
