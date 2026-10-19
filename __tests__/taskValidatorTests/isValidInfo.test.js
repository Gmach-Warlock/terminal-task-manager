import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidInfo } from "../../src/controller/tasks/taskValidator.js";

describe("isValidInfo", () => {
  it("should return false if there is no title, description, or priority in the object", () => {
    const obj1 = { title: "Title1", description: "Description" };
    const obj2 = { title: "Title1", priority: "Priority" };
    const obj3 = { description: "Description", priority: "Description" };
    assert.strictEqual(isValidInfo(obj1), false);
    assert.strictEqual(isValidInfo(obj2), false);
    assert.strictEqual(isValidInfo(obj3), false);
  });
  it("should return false if either string answers are not provided and the string for priority is not low, medium, or high", () => {
    const obj1 = { title: 12, description: "good string", priority: "low" };
    const obj2 = { title: "Good Title", description: false, priority: "low" };
    const obj3 = {
      title: "Good Title",
      description: "good string",
      priority: "bad priority",
    };
    assert.strictEqual(isValidInfo(obj1), false);
    assert.strictEqual(isValidInfo(obj2), false);
    assert.strictEqual(isValidInfo(obj3), false);
  });
  it("should return true if the object has proper data types for the values", () => {
    const goodObj = {
      title: "Good Title",
      description: "Good description",
      priority: "low",
    };
    assert.strictEqual(isValidInfo(goodObj), true);
  });
});
