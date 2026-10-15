import { taskStore } from "../../model/taskStore.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { getFilterInfo } from "../terminal/filterPrompts.js";
import {
  makeFilterArrayByStatus,
  makeFilterArrayByPriority,
} from "./taskHelpers2.js";

function taskFilterByStatus(status) {
  const newArray = makeFilterArrayByStatus(status);
  logTasks(newArray, "filter");
}

function taskFilterByPriority(priority) {
  const newArray = makeFilterArrayByPriority(priority);
  (logTasks(newArray), "priority");
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
