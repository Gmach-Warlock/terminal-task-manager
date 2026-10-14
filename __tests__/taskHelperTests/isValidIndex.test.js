import { describe, it } from "node:test";
import assert from "node:assert";

describe("isValidIndex", () => {
  it("should return false if the first param isn't an array", () => {
    const testArray = "wrong type";
    const testId = "testId";
    assert.notStrictEqual((testArray, testId), false);
  });
  it("should return false if the index is out of bounds of the array", () => {
    const testArray = [1, 2, 3, 4, 5];
    const testIndex = 10;
    assert.notStrictEqual((testArray, testIndex), false);
  });
  it("should return true if an item exists with that index in the array", () => {
    const testArray = [1, 2, 3, 4, 5];
    const testIndex = 3;
    assert.strict((testArray, testIndex), true);
  });
});
