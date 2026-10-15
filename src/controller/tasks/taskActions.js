import { taskStore } from "../../model/taskStore.js";
import { Task } from "../../model/Task.js";
import { filterTaskInStore } from "./taskFilters.js";
import {
  getTaskDescription,
  getTaskPriority,
  getTaskTitle,
} from "../terminal/infoPrompts.js";
import { getEditInfo } from "../terminal/editPrompts.js";
import { searchTasksInStore } from "./taskSearch.js";
import { addItem, editItem } from "./taskHelpers.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { taskApp } from "../../model/TaskApp.js";
import { taskTotals } from "../../model/TaskTotals.js";
import { sortItemsInStore } from "./taskSorters.js";
import { cleanNumericInput } from "./taskValidator.js";

export async function addTaskToStore() {
  const title = await getTaskTitle("add");
  const description = await getTaskDescription();
  const priority = await getTaskPriority();
  const task = new Task(title, description, priority);
  const newState = addItem(taskStore.tasks, task);
  if (newState) {
    console.clear();
    taskTotals.addTaskTotals();
    taskStore.setTasks(newState);
  }
  if (!newState) {
    console.log("Failed to add task: validation failed ");
    return;
  }
}

export async function removeTaskFromStore() {
  const title = await getTaskTitle("delete");
  const task = taskStore.tasks.find((task) => task.title === title);
  if (!task) {
    console.log("Title not found, returning to main menu");
    mainMenu();
  }
  const newArray = taskStore.tasks.filter((task) => task.title !== title);
  taskStore.setTasks(newArray);
}

export async function editTaskInStore() {
  const lookup = await getEditInfo();
  const edittedItem = editItem(
    taskStore.tasks,
    lookup.title,
    lookup.prop,
    lookup.newValue,
  );
  const newState = addItem(taskStore.tasks, edittedItem);
  if (newState) taskStore.setTasks(newState);
  if (!newState) mainMenu();
}

async function markTaskInStore(completed = true) {
  const title = completed
    ? await getTaskTitle("complete")
    : await getTaskTitle("incomplete");
  const markedItem = completed
    ? await editItem(taskStore.tasks, title, "completed", true)
    : await editItem(taskStore.tasks, title, "completed", false);
  const newState = addItem(taskStore.tasks, markedItem);
  if (newState) taskStore.setTasks(newState);
  if (!newState) mainMenu();
}

export function viewAllTasks() {
  console.clear();
  console.log(`Here are your tasks: `);
  logTasks(taskStore.tasks, "all");
  mainMenu();
}

function quitTaskApp() {
  console.log(`
Thank you for using the Task App. 
Goodbye.`);
  taskApp.quitApp();
}

// returns appropriate action sequence based on input
export function returnAppropriateAction(value) {
  console.log(value);
  const string = cleanNumericInput(value);
  const lookup = {
    1: () => addTaskToStore(),
    2: () => viewAllTasks(),
    3: () => markTaskInStore(),
    4: () => markTaskInStore(false),
    5: () => editTaskInStore(),
    6: () => removeTaskFromStore(),
    7: () => searchTasksInStore(),
    8: () => sortItemsInStore(),
    9: () => filterTaskInStore(),
    10: () => quitTaskApp(),
  };
  if (lookup[string]) return lookup[string]();
}
