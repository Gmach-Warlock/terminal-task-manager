import { taskStore } from "../../model/taskStore.js";
import Task from "../../model/Task.js";
import { getStringInput } from "../terminal/terminal.js";

export async function addTaskToStore() {
  const title = await getStringInput("Please give your task a title: ");
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

export function editTaskInStore(title, newTitle, newDescription, newPriority) {
  const task = taskStore.tasks.find((task) => task.title === title);
  if (!task) {
    console.log("Id not found");
    return;
  }
  task.title = newTitle;
  task.description = newDescription;
  task.priority = newPriority;
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
export function returnAppropriateAction(value, instance) {
  const lookup = {
    1: () => addTaskHelper(instance),
    2: () => viewAll(instance),
    3: () => taskComplete(instance),
    4: () => taskComplete(instance, false),
    5: () => editTaskHelper(instance),
    6: () => deleteTaskHelper(instance),
    7: () => console.log("standby"),
    8: () => console.log("standby"),
    9: () => console.log("standby"),
    10: () => quitApp(),
  };
  return lookup[checkNum(value)];
}

addTaskToStore();
addTaskToStore();
