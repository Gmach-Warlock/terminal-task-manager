import { taskStore } from "../../model/taskStore.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { getFilterInfo } from "../terminal/filterPrompts.js";
import { makeFilterArray } from "./taskHelpers2.js";

function taskFilterByStatus(status) {
  const newArray = makeFilterArray(taskStore.tasks, "completed", status);
  logTasks(newArray, "filter");
}

function taskFilterByPriority(priority) {
  const newArray = makeFilterArray(taskStore.tasks, "priority", priority);
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
