import { isValidStatus, isValidPriority } from "./taskValidator.js";
import { taskStore } from "../../model/taskStore.js";

export function makeFilterArrayByStatus(status) {
  if (!isValidStatus(status)) return;
  const lookup = {
    all: () => taskStore.tasks.map((item) => item),
    complete: () => taskStore.tasks.filter((item) => item.completed === true),
    incomplete: () =>
      taskStore.tasks.filter((item) => item.completed === false),
  };
  const newArray = lookup[status]();
  return newArray;
}

export function makeFilterArrayByPriority(priority) {
  console.log("in function", priority);
  if (!isValidPriority(priority)) {
    console.log("failed make array guard");
    return;
  }
  const newArray = taskStore.tasks.filter(
    (item) => item.priority.toLowerCase() === priority,
  );
  return newArray;
}
