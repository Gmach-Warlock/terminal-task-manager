import { taskStore } from "../../model/taskStore.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { getSearchCriteria } from "../terminal/searchPrompts.js";

function searchArray(arr, term) {
  const newArray = arr.filter((task) =>
    task.title.toLowerCase().includes(term),
  );
  if (!newArray) {
    console.log("Search term not found.");
    return;
  }
  return newArray;
}

export async function searchTasksInStore() {
  const term = await getSearchCriteria();
  if (!term) return;
  const newArray = searchArray(taskStore.tasks, term);
  logTasks(newArray, "search");
}
