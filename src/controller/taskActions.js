import { createInfoObj } from "./taskFactories";

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
