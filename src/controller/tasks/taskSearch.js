import { logTasks } from "../../view/menu";
import { getSearchCriteria } from "../terminal/searchPrompts.js";

function searchArray(term) {
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
  const newArray = searchArray(term);
  logTasks(newArray, "search");
  return newArray;
}
