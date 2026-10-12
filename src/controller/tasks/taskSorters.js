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
      [...arr].sort((a, b) => new Date(b.createAt) - new Date(a.createAt)),
    oldest: () =>
      [...arr].sort((a, b) => new Date(a.createAt) - new Date(b.createAt)),
    high: () =>
      [...arr].sort(
        (a, b) => priorityRank[b.priority] - priorityRank[a.priority],
      ),
    low: () =>
      [...arr].sort(
        (a, b) => priorityRank[a.priority] - priorityRank[b.priority],
      ),
  };
  const newArray = lookup[category];
  return newArray;
}

export async function sortItemsInStore() {
  console.log(`sort items in store`);
  const criteria = await getSortCriteria();
  const newArray = sortItems(taskStore.tasks, criteria);
  taskStore.setTasks(newArray);
  mainMenu();
}
