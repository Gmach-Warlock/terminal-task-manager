import {
  makeFilterArrayByPriority,
  makeFilterArrayByStatus,
} from "./taskHelpers2.js";
import { logTasks, getSearchCriteria, mainMenu } from "../../view/menu.js";
import { getFilterInfo } from "../terminal/filterPrompts.js";
import { getSortCriteria } from "../terminal/sortPrompts.js";
import { taskStore } from "../../model/taskStore.js";

function taskFilterByStatus(status) {
  const newArray = makeFilterArrayByStatus(status);
  logTasks(newArray, "filter");
}

function taskFilterByPriority(priority) {
  const newArray = makeFilterArrayByPriority(priority);
  logTasks(newArray, "filter");
}

export async function filterTaskInStore() {
  const type = await getFilterInfo();
  const lookup = {
    completed: () => taskFilterByStatus("complete"),
    notCompleted: () => taskFilterByStatus("incomplete"),
    low: () => taskFilterByPriority("low"),
    medium: () => taskFilterByPriority("medium"),
    high: () => taskFilterByPriority("high"),
    all: () => logTasks(taskStore.tasks, "all"),
  };
  lookup[type]();

  mainMenu();
}

export async function searchTasksInStore() {
  const term = await getSearchCriteria();
  if (!term) return;
  const newArray = searchArray(taskStore.tasks, term);
  logTasks(newArray, "search");
  mainMenu();
}

export async function sortItemsInStore() {
  const criteria = await getSortCriteria();
  const newArray = sortItems(taskStore.tasks, criteria);
  taskStore.setTasks(newArray);
}
