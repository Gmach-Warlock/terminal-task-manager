import { isCleanString, isValidPriority } from "../../utils/cleanAndGuard";
export function taskValidator(task) {
  if (!task.description || !task.title || !task.priority) return false;
  if (
    !isCleanString(task.description) ||
    !isCleanString(task.title) ||
    !isValidPriority(task.priority)
  )
    return false;

  return true;
}
