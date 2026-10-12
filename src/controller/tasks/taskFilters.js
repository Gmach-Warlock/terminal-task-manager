import { taskStore } from "../../model/taskStore.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { getFilterInfo } from "../terminal/filterPrompts.js";

function makeFilterArrayByStatus(status) {
  if (status !== "complete" && status !== "incomplete" && status !== "all")
    return;
  const lookup = {
    all: () => taskStore.tasks.map((item) => item),
    complete: () => taskStore.tasks.filter((item) => item.completed === true),
    incomplete: () =>
      taskStore.tasks.filter((item) => item.completed === false),
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
  const newArray = taskStore.tasks.filter(
    (item) => item.priority.toLowerCase() === priority,
  );
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
    completed: () => taskFilterByStatus("complete"),
    notCompleted: () => taskFilterByStatus("incomplete"),
    low: () => taskFilterByPriority("low"),
    medium: () => taskFilterByPriority("medium"),
    high: () => taskFilterByPriority("high"),
    all: () => logTasks(taskStore.tasks, "all"),
  };
  return lookup[type]();
}
