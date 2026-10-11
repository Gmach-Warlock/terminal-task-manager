import { myListener, taskStore } from "../../model/taskStore.js";
import { Task } from "../../model/Task.js";
import { getStringInput } from "../terminal/terminal.js";
import { filterTaskInStore } from "./taskFilters.js";
import {
  getMarkTitle,
  getTaskDescription,
  getTaskPriority,
  getTaskTitle,
} from "../terminal/infoPrompts.js";
import { searchTasksInStore } from "./taskSearch.js";
import { addItem, editItem } from "./taskHelpers.js";
import { mainMenu, logTasks } from "../../view/menu.js";
import { isCleanString } from "./taskValidator.js";
import { taskApp } from "../../model/TaskApp.js";

export async function addTaskToStore() {
  const title = await getTaskTitle("add");
  const description = await getTaskDescription();
  const priority = await getTaskPriority();
  const task = new Task(title, description, priority);
  console.clear();
  const newState = addItem(taskStore.tasks, task);
  taskStore.setTasks(newState);
  mainMenu();
}

export async function removeTaskFromStore() {
  const title = await getTaskTitle("delete");
  const task = taskStore.tasks.find((task) => task.title === title);
  if (!task) {
    console.log("Title not found");
    return;
  }
  const newArray = taskStore.tasks.filter((task) => task.title !== title);
  taskStore.setTasks(newArray);
}

export async function editTaskInStore() {
  const lookup = await getEditInfo();
  const newArray = editItem(
    taskStore.tasks,
    lookup.title,
    lookup.prop,
    lookup.newValue,
  );
  taskStore.setTasks(newArray);
  mainMenu();
}

async function markTaskInStore(completed = true) {
  const title = getMarkTitle();
  const newArray = completed
    ? editItem(taskStore.tasks, title, "completed", true)
    : editItem(taskStore.tasks, title, "completed", false);
  taskStore.setTasks(newArray);
  mainMenu();
}

export function viewAllTasks() {
  console.clear();
  console.log(`Here are your tasks: `);
  logTasks(taskStore.tasks, "all");
  mainMenu();
}

function quitTaskApp() {
  console.log(`Thank you for using the Task App. 
    Goodbye.`);
  taskApp.quitApp();
}

// returns appropriate action sequence based on input
export function returnAppropriateAction(value) {
  const string = String(value);
  const lookup = {
    1: () => addTaskToStore(),
    2: () => viewAllTasks(),
    3: () => markTaskInStore(),
    4: () => markTaskInStore(false),
    5: () => editTaskInStore(),
    6: () => removeTaskFromStore(),
    7: () => searchTasksInStore(),
    8: () => console.log("sort standby"),
    9: () => filterTaskInStore(),
    10: () => quitTaskApp(),
  };
  return lookup[string]();
}
