import { describe, it } from "node:test";
import assert from "node:assert";
import { cleanNumericInput } from "../../src/controller/tasks/taskValidator.js";
describe("cleanNumericInput", () => {
  it("should early return with undefined if the input is not a number", () => {
    const testValue = "string";
    assert.strictEqual(cleanNumericInput(testValue), undefined);
  });
  it("should early return with undefined is out of range of the min and max which default at 1, and 10", () => {
    const testValue = 12;
    const testValue2 = 6;
    const min = 1;
    const max = 5;
    assert.strictEqual(cleanNumericInput(testValue), undefined);
    assert.strictEqual(cleanNumericInput(testValue2, min, max), undefined);
  });
  it("should return a stringed value of the number if it is a number and is in range of min and max", () => {
    const testValue = 5;
    const expected = "5";
    assert.strictEqual(cleanNumericInput(testValue), expected);
  });
});
