import { taskStore } from "../../model/taskStore.js";
import { Task } from "../../model/Task.js";
import { taskTotals } from "../../model/TaskTotals.js";
import { taskApp } from "../../model/TaskApp.js";
import {
  getTaskTitle,
  getSearchCriteria,
  getAddInfo,
} from "../terminal/infoPrompts.js";
import { getEditInfo } from "../terminal/editPrompts.js";
import { addItem, editItem, updateStoreArr } from "./taskHelpers.js";
import { sortItems, searchArray } from "./taskHelpers2.js";
import { logTasks, mainMenu } from "../../view/menu.js";
import { cleanNumericInput } from "./taskValidator.js";
import { getSortCriteria } from "../terminal/sortPrompts.js";
import { filterTaskInStore } from "./taskFilters.js";

export async function addTaskToStore() {
  const lookup = await getAddInfo();
  const task = new Task(lookup.title, lookup.description, lookup.priority);
  const newState = addItem(taskStore.tasks, task);
  if (newState) {
    console.clear();
    taskTotals.addTaskTotals();
    updateStoreArr(newState, taskStore, taskStore.setTasks);
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
  if (newArray && task) {
    taskTotals.removeTaskTotals();
    updateStoreArr(newArray, taskStore, taskStore.setTasks);
  }
  if (!newArray) {
    console.log("Failed to remove task: validation failed ");
    return;
  }
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
  if (newState) updateStoreArr(newState, taskStore, taskStore.setTasks);
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
  if (newState) updateStoreArr(newState, taskStore, taskStore.setTasks);
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
  if (newArray) updateStoreArr(newArray, taskStore, taskStore.setTasks);
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
