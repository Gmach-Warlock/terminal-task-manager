import { describe, it } from "node:test";
import assert from "node:assert";
import { filterByCategory } from "../../src/controller/tasks/taskHelpers.js";
describe("filterByCategory", () => {
  const testArr = [
    {
      title: "Title 1",
      description: "Description 1",
      priority: "low",
      completed: false,
    },
    {
      title: "Title 2",
      description: "Description 2",
      priority: "medium",
      completed: true,
    },
    {
      title: "Title 3",
      description: "Description 3",
      priority: "high",
      completed: false,
    },
  ];
  it("should return undefined if one of the parameters is not provided", () => {
    assert.strictEqual(filterByCategory(testArr, "value here"), undefined);
  });
  it("should early return undefined if the category isn't one of the available options", () => {
    assert.strictEqual(filterByCategory(testArr, "wrong", "low"), undefined);
  });
  it("should return a new array of the filtered items if all of the params are good", () => {
    assert.deepStrictEqual(filterByCategory(testArr, "priority", "medium"), [
      {
        title: "Title 2",
        description: "Description 2",
        priority: "medium",
        completed: true,
      },
    ]);
  });
});
