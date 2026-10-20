import { isValidObject } from "./taskValidator.js";

export function isOkToToggleInStore(store, task, completed) {
  if (
    !isValidObject(store) ||
    !isValidObject(task) ||
    typeof completed !== "boolean"
  )
    return false;
  console.log("checking ", task.completed, completed);
  if (task.completed === completed) return false;
  return true;
}
