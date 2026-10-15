import {
  isValidCategory,
  isValidStatus,
  isValidPriority,
} from "./taskValidator.js";
import { taskStore } from "../../model/taskStore.js";

export function filterByCategory(arr, category, value) {
  if (!arr || !category || !value) return;
  if (!Array.isArray(arr) || !isValidCategory(category)) return;
  const newArray = arr.filter((item) => item[category] === value);
  return newArray;
}

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
  if (!isValidPriority(priority)) return;
  const newArray = taskStore.tasks.filter(
    (item) => item.priority.toLowerCase() === priority,
  );
  return newArray;
}
