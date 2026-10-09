import { createInfoObj } from "./taskFactories.js";
import { getAnswer } from "../terminal/terminal.js";

// helpers for the lookup
export async function addTaskHelper(instance) {
  const title = await getAnswer("What is the title of the task?");
  const description = await getAnswer(
    "Please give a brief description of your task: ",
  );
  const priority = await getAnswer(
    "Is this low, medium, or high priority?",
  ).toLowerCase();
  instance.addTask(title, description, priority);
  console.log(`New task successfully added`);
}
export function editTaskHelper(instance) {
  const id = getAnswer("What is the id of the task to edit? ");
  const lookup = createInfoObj();
  instance.editTask(id, lookup.title, lookup.description, lookup.priority);
}
export function viewAll(instance) {
  instance.viewAllTasks();
}
export function taskComplete(instance, complete = true) {
  const id = getAnswer(
    `What is the id of the task that is ${complete ? "" : "not"} completed? `,
  );
  if (complete) return instance.markTaskComplete(id);
  return instance.markTaskIncomplete(id);
}
export function deleteTaskHelper(instance) {
  const id = getAnswer("What is the id of the task to delete? ");
  return instance.deleteTask(id);
}
export async function quitApp(instance) {
  const answer = await getAnswer(getFinalConfirmation());
  return instance.quit();
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
