import { Task } from "../src/model/Task.js";
export async function createMockData(numOfItems) {
  const array = [];
  const lookup = {
    0: "low",
    1: "medium",
    2: "high",
  };
  for (let i = 0; i < numOfItems; i++) {
    array.push(
      new Task(
        `Title ${i + 1}`,
        `Description ${i + 1}`,
        `Priority ${lookup[Math.floor(Math.random() * 3)]}`,
      ),
    );
  }
  return array;
}

const arr1 = createMockData(10);
console.log(arr1);
