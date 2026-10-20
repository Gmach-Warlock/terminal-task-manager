import { isValidObject } from "./taskValidator.js";

export function isOkToToggleInStore(task, completed) {
  if (!isValidObject(task) || typeof completed !== "boolean") {
    console.log("fail in 1");
    return false;
  }
  if (task.completed !== completed) {
    console.log("failed in 2");
    return false;
  }
  return true;
}
