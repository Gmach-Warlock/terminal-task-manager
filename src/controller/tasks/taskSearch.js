import { taskStore } from "../../model/taskStore.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { getSearchCriteria } from "../terminal/searchPrompts.js";

export async function searchTasksInStore() {
  const term = await getSearchCriteria();
  if (!term) return;
  const newArray = searchArray(taskStore.tasks, term);
  logTasks(newArray, "search");
  mainMenu();
}
