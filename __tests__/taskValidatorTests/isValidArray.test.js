import { describe, it } from "node:test";
import assert from "node:assert";
import { isValidArray } from "../../src/controller/tasks/taskValidator.js";

describe("isValidArray", () => {
  it("should return false if the first param is not an array", () => {
    const badFirstParam = "String not array";
    assert.strictEqual(isValidArray(badFirstParam), false);
  });
  it("should return true if the provided param is an array", () => {
    const goodFirstParam = ["Item in array"];
    assert.strictEqual(isValidArray(goodFirstParam), true);
  });
});
