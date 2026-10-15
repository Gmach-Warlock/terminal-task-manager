import { taskStore } from "../../model/taskStore.js";
import { getSortCriteria } from "../terminal/sortPrompts.js";
import { sortItems } from "./taskHelpers3.js";

export async function sortItemsInStore() {
  const criteria = await getSortCriteria();
  const newArray = sortItems(taskStore.tasks, criteria);
  taskStore.setTasks(newArray);
}
