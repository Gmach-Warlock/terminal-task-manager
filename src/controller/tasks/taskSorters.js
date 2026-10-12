import { taskStore } from "../../model/taskStore.js";
import { mainMenu } from "../../view/menu.js";
import { getSortCriteria } from "../terminal/sortPrompts.js";

export function sortItems(arr, category) {
  const priorityRank = {
    low: 1,
    medium: 2,
    high: 3,
  };
  const lookup = {
    newest: () =>
      [...arr].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    oldest: () =>
      [...arr].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    high: () =>
      [...arr].sort(
        (a, b) =>
          priorityRank[b.priority?.toLowerCase()] -
          priorityRank[a.priority?.toLowerCase()],
      ),
    low: () =>
      [...arr].sort(
        (a, b) =>
          priorityRank[a.priority?.toLowerCase()] -
          priorityRank[b.priority?.toLowerCase()],
      ),
  };
  const newArray = lookup[category]();
  return newArray;
}

export async function sortItemsInStore() {
  const criteria = await getSortCriteria();
  const newArray = sortItems(taskStore.tasks, criteria);
  taskStore.setTasks(newArray);
}
