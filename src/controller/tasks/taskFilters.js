import { taskStore } from "../../model/taskStore.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { getFilterInfo } from "../terminal/filterPrompts.js";

function makeFilterArrayByStatus(status) {
  if (status !== "complete" && status !== "incomplete" && status !== "all")
    return;
  const lookup = {
    all: () => taskStore.tasks.map((item) => item),
    complete: () => taskStore.tasks.filter((item) => item.complete === true),
    incomplete: () => taskStore.tasks.filter((item) => item.complete === false),
  };
  const newArray = lookup[status]();
  return newArray;
}

export function taskFilterByStatus(status) {
  const newArray = makeFilterArrayByStatus(status);
  logTasks(newArray, "filter");
  mainMenu();
}

function makeFilterArrayByPriority(priority) {
  if (priority !== "low" && priority !== "medium" && priority !== "high")
    return;
  const newArray = taskStore.tasks.filter((item) => item.priority === priority);
  logTasks(newArray, "filter");
  return newArray;
}

export function taskFilterByPriority(priority) {
  const newArray = makeFilterArrayByPriority(priority);
  (logTasks(newArray), "priority");
  mainMenu();
}

export async function filterTaskInStore() {
  const type = await getFilterInfo();
  const lookup = {
    1: () => taskFilterByStatus("complete"),
    2: () => taskFilterByStatus("incomplete"),
    3: () => taskFilterByPriority("low"),
    4: () => taskFilterByPriority("medium"),
    5: () => taskFilterByPriority("high"),
    6: () => logTasks(taskStore.tasks, "all"),
  };
  return lookup[type];
}
