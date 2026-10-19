import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidItemForArray } from "../../src/controller/tasks/taskValidator.js";

describe("isValidItemForArray", () => {
  const badTestArray = "not an array";
  const goodTestArray = [];
  const testItem = { title: "Test Item" };
  const fullTestArray = [testItem];
  it("should return false if the params are not of the proper types", () => {
    assert.strictEqual(
      isValidItemForArray(badTestArray, testItem, "title"),
      false,
    );
    assert.strictEqual(
      isValidItemForArray(goodTestArray, "not an object", "title"),
      false,
    );
    assert.strictEqual(
      isValidItemForArray(goodTestArray, testItem, 120),
      false,
    );
  });
  it("should return false if the prop doesn't exist on the object", () => {
    assert.strictEqual(
      isValidItemForArray(goodTestArray, testItem, "absent"),
      false,
    );
  });
  it("should return false if there is not an item with the same title as the one of the object provided", () => {
    assert.strictEqual(
      isValidItemForArray(badTestArray, testItem, "title"),
      false,
    );
  });
  it("should return true if all of the params are good", () => {
    assert.strictEqual(
      isValidItemForArray(fullTestArray, testItem, "title"),
      true,
    );
  });
});
