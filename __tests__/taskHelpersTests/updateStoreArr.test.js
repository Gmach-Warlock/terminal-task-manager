/* import { describe, it } from "node:test";
import assert from "node:assert";
import { updateStoreArr } from "../../src/controller/tasks/taskHelpers.js";

describe("updateStoreArr", () => {
  const testArr = [
    {
      title: "Title 1",
      description: "Description 1",
      priority: "low",
      completed: false,
    },
  ];
  const goodTestObj = {
    title: "Good Title",
    description: "Good Description",
    priority: "low",
  };
  const badTestObj = {
    title: "Good Title",
    description: "Good Description",
    priority: "Bad priority",
  };
  const createTestStore = () => ({
    tasks: [],
    setTasks(newTasks) {
      this.tasks = newTasks;
    },
  });

  it("should early return undefined if one of the parameters is missing", () => {
    assert.strictEqual(updateStoreArr(testArr, "tasks"), undefined);
  });
  it("should early return undefined if the info object doesn't have the right props or the arrProp provided isn't a prop on the store provided", () => {
    const testStore = createTestStore();
    assert.strictEqual(
      updateStoreArr(badTestObj, testStore, "tasks"),
      undefined,
    );
    assert.strictEqual(
      updateStoreArr(goodTestObj, testStore, "wrong"),
      undefined,
    );
  });
  it("should update the state of the storeMethod prop on the store with the newArray provided if all of the parameters are good", () => {
    const testStore = createTestStore();
    const result = updateStoreArr(testArr, testStore, "setTasks");
    assert.deepStrictEqual(result, testArr);
  });
});
 */
