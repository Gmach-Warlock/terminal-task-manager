import { infoFactory } from "../helpers/factory";
import { getAnswer } from "../helpers/getAnswer";

// helpers for the lookup
function addTaskHelper(instance) {
  const lookup = infoFactory();
  instance.addTask(lookup.title, lookup.description, lookup.priority);
}
function editTaskHelper(instance) {
  const id = getAnswer("What is the id of the task to edit? ");
  const lookup = infoFactory();
  instance.editTask(id, lookup.title, lookup.description, lookup.priority);
}
function viewAll(instance) {
  instance.viewAllTasks();
}
function taskComplete(instance, complete = true) {
  const id = getAnswer(
    `What is the id of the task that is ${complete ? "" : "not"} completed? `,
  );
  if (complete) return instance.markTaskComplete(id);
  return instance.markTaskIncomplete(id);
}
function deleteTaskHelper(instance) {
  const id = getAnswer("What is the id of the task to delete? ");
  return instance.deleteTask(id);
}

// returns appropriate actions based on the response value
export function returnAppropriateAction(value, instance) {
  const lookup = {
    1: () => addTaskHelper(instance),
    2: () => viewAll(instance),
    3: () => taskComplete(instance),
    4: () => taskComplete(instance, false),
    5: () => deleteTaskHelper(instance),
    6: () => editTaskHelper(instance),
    7: () => console.log("search is on standby"),
    8: () => console.log("filters are on standby"),
    9: () => console.log("sorts are on standby"),
    10: () => console.log("roll em up"),
  };
  return lookup[checkNum(value)];
}
