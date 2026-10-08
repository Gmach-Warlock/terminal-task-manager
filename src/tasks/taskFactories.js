import Task from "./Task.js";
// helper for createdAt
function timeStamp() {
  const newUnformatted = new Date();
  const date = newUnformatted.toISOString();
  return date;
}
// task factory
export default function createTask(title, description, priority) {
  const newId = crypto.randomUUID();
  return new Task(newId, title, description, priority, timeStamp());
}
// creates title, description, priority object for use in add and edit methods
export function createInfoObj() {
  const title = getAnswer("Please give your task a title: ");
  const description = getAnswer("Shortly describe your task: ");
  const priority = getAnswer(
    "Is this of low, medium, or high priority? ",
  ).toLowerCase();
  if (
    !isCleanString(title) ||
    !isCleanString(description) ||
    !isCleanString(priority)
  )
    return;
  if (!isValidPriority(priority)) return;
  return {
    title,
    description,
    priority,
  };
}
