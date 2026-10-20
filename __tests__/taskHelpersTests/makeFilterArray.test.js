import { describe, it } from "node:test";
import assert from "node:assert";
import { makeFilterArray } from "../../src/controller/tasks/taskHelpers2.js";

describe("makeFilterArray", () => {
  const testItm1 = {
    title: "Task 1",
    description: "Desc 1",
    priority: "low",
    completed: false,
  };
  const testItm2 = {
    title: "Task 2",
    description: "Desc 2",
    priority: "medium",
    completed: true,
  };
  const testItm3 = {
    title: "Task 3",
    description: "Desc 3",
    priority: "high",
    completed: false,
  };
  const testArray = [testItm1, testItm2, testItm3];
  it("should early return undefined if the params are not of proper type", () => {
    assert.strictEqual(
      makeFilterArray("not array", "complete", "completed"),
      undefined,
    );
    assert.strictEqual(makeFilterArray(testArray, "doggy", "all"), undefined);
    assert.strictEqual(
      makeFilterArray(testArray, "completed", "kitty"),
      undefined,
    );
  });
  it("should return a new array filtered correctly if all of the params are good", () => {
    assert.deepStrictEqual(
      makeFilterArray(testArray, "completed", "complete"),
      [testItm2],
    );
    assert.deepStrictEqual(
      makeFilterArray(testArray, "completed", "incomplete"),
      [testItm1, testItm3],
    );
    assert.deepStrictEqual(makeFilterArray(testArray, "completed", "all"), [
      testItm1,
      testItm2,
      testItm3,
    ]);
    assert.deepStrictEqual(makeFilterArray(testArray, "priority", "low"), [
      testItm1,
    ]);
    assert.deepStrictEqual(makeFilterArray(testArray, "priority", "medium"), [
      testItm2,
    ]);
    assert.deepStrictEqual(makeFilterArray(testArray, "priority", "high"), [
      testItm3,
    ]);
  });
});
