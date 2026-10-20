import { describe, it } from "node:test";
import assert from "node:assert";
import { searchArray } from "../../src/controller/tasks/taskHelpers2.js";

describe("searchArry", () => {
  const array = [
    { title: "Title 1", description: "Description 1", priority: "low" },
    { title: "Title 2", description: "Description 2", priority: "low" },
  ];
  it("should return undefined if an array or term is not provided", () => {
    assert.strictEqual(searchArray(array), undefined);
  });
  it("should return an empty array if there is no item with the term in the title in the array provided", () => {
    assert.deepStrictEqual(searchArray(array, "Wrong"), []);
  });
  it("should return an array with any items that have the search term in their title", () => {
    assert.deepStrictEqual(searchArray(array, "Title"), array);
  });
});
