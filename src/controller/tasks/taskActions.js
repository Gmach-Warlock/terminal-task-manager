import { taskStore } from "../../model/taskStore.js";
import { Task } from "../../model/Task.js";
import { getStringInput } from "../terminal/terminal.js";
import { filterTaskInStore } from "./taskFilters.js";
import { getTitle } from "../terminal/infoPrompts.js";
import { searchTasksInStore } from "./taskSearch.js";

export async function addTaskToStore() {
  const title = await getTitle("add");
  const description = await getStringInput(
    "Please give a short description of your task: ",
  );
  const priority = await getStringInput(
    "Is this low, medium, or high priority? ",
  );
  const task = new Task(title, description, priority);
  const newState = [...taskStore.tasks, task];
  console.log(newState);
  taskStore.tasks = newState;
}

export async function removeTaskFromStore() {
  const title = await getStringInput(
    "What is the title of the task to remove? ",
  );
  const task = taskStore.tasks.find((task) => task.title === title);
  if (!task) {
    console.log("Title not found");
    return;
  }
  const newArray = taskStore.tasks.filter((task) => task.title !== title);
  taskStore.tasks = newArray;
}

export async function getEditInfo() {
  const title = await getTitle(edit);
  const prop = await getPropToModify();
  const newValue = await getStringInput();
  return { title, prop, newValue };
}

export async function editTaskInStore() {
  const lookup = await getEditInfo();
  const task = taskStore.tasks.find((task) => task.title === lookup.title);
  if (!task) {
    console.log("Task title not found");
    return;
  }
  task[lookup.prop] = lookup.newValue;
}

async function markTaskInStore(completed = true) {
  const title = await getTitle();
  const task = taskStore.tasks.find((task) => task.title === title);
  if (!task) {
    console.log("A Task with that title could not be found.");
    return;
  }
  task.completed = completed;
}

export function viewAllTasks() {
  console.log(`Here are your tasks: `);
  taskStore.tasks.forEach((task) =>
    console.log(`
    title: ${task.title}
    description: ${task.description}
    priority: ${task.priority}
    completed: ${task.completed}
    createdAt: ${task.createdAt}
    -----------------------------------
    `),
  );
}

// returns appropriate action sequence based on input
export function returnAppropriateAction(value) {
  const string = String(value);
  console.log(string);
  const lookup = {
    1: () => {
      console.log("You're here");
      addTaskToStore();
    },
    2: () => viewAllTasks(),
    3: () => markTaskInStore(),
    4: () => markTaskInStore(false),
    5: () => editTaskInStore(),
    6: () => removeTaskFromStore(),
    7: () => searchTasksInStore(),
    8: () => console.log("sort standby"),
    9: () => filterTaskInStore(),
    10: () => quitApp(),
  };
  return lookup[string]();
}
