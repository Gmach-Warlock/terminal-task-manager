import { createInfoObj } from "./taskFactories";
import { getAnswer } from "../terminal/terminal";

// helpers for the lookup
export function addTaskHelper(instance) {
  const lookup = createInfoObj();
  instance.addTask(lookup.title, lookup.description, lookup.priority);
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
    3: () => {
      const id = getAnswer("What is the id of the task to mark complete? ");
      taskComplete(instance, id);
    },
    4: () => {
      const id = getAnswer("What is id of the task to mark incomplete? ");
      taskComplete(instance, id, false);
    },
    5: () => console.log("standby"),
    6: () => console.log("standby"),
    7: () => console.log("standby"),
    8: () => console.log("standby"),
    9: () => console.log("standby"),
    10: () => console.log("roll em up"),
  };
  return lookup[checkNum(value)];
}
