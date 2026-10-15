import { describe, it } from "node:test";
import assert from "node:assert";
import { sortItems } from "../../src/controller/tasks/taskHelpers3.js";

describe("sortItems", () => {
  const testArr = [
    {
      title: "Title 1",
      description: "Description 1",
      priority: "low",
      completed: false,
      createdAt: "2026-10-14T12:03:00Z",
    },
    {
      title: "Title 2",
      description: "Description 2",
      priority: "medium",
      completed: true,
      createdAt: "2026-10-14T12:00:00Z",
    },
    {
      title: "Title 3",
      description: "Description 3",
      priority: "high",
      completed: false,
      createdAt: "2026-10-14T12:05:00Z",
    },
  ];
  it("should early return undefined if one of the parameters is not provided", () => {
    assert.strictEqual(sortItems(testArr), undefined);
  });
  it("should early return undefined if the category provided isn't one of the available options: newest, oldest, high, or low", () => {
    assert.strictEqual(sortItems(testArr, "wrong"), undefined);
  });
  it("should return a correctly sorted array based on the type if the two parameters given are good", () => {
    assert.deepStrictEqual(sortItems(testArr, "low"), testArr);
    assert.deepStrictEqual(sortItems(testArr, "high"), [
      {
        title: "Title 3",
        description: "Description 3",
        priority: "high",
        completed: false,
        createdAt: "2026-10-14T12:05:00Z",
      },
      {
        title: "Title 2",
        description: "Description 2",
        priority: "medium",
        completed: true,
        createdAt: "2026-10-14T12:00:00Z",
      },
      {
        title: "Title 1",
        description: "Description 1",
        priority: "low",
        completed: false,
        createdAt: "2026-10-14T12:03:00Z",
      },
    ]);
    assert.deepEqual(sortItems(testArr, "oldest"), [
      {
        title: "Title 2",
        description: "Description 2",
        priority: "medium",
        completed: true,
        createdAt: "2026-10-14T12:00:00Z",
      },
      {
        title: "Title 1",
        description: "Description 1",
        priority: "low",
        completed: false,
        createdAt: "2026-10-14T12:03:00Z",
      },
      {
        title: "Title 3",
        description: "Description 3",
        priority: "high",
        completed: false,
        createdAt: "2026-10-14T12:05:00Z",
      },
    ]);
    assert.deepEqual(sortItems(testArr, "newest"), [
      {
        title: "Title 3",
        description: "Description 3",
        priority: "high",
        completed: false,
        createdAt: "2026-10-14T12:05:00Z",
      },
      {
        title: "Title 1",
        description: "Description 1",
        priority: "low",
        completed: false,
        createdAt: "2026-10-14T12:03:00Z",
      },

      {
        title: "Title 2",
        description: "Description 2",
        priority: "medium",
        completed: true,
        createdAt: "2026-10-14T12:00:00Z",
      },
    ]);
  });
});
