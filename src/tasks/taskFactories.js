import Task from "./Task.js";

function timeStamp() {
  const newUnformatted = new Date();
  const date = newUnformatted.toISOString();
  return date;
}

export default function taskFactory(id, title, description, priority) {
  return new Task(id, title, description, priority, timeStamp());
}
// gets title, description, priority for use in add and edit methods
export function infoFactory() {
  const title = getAnswer(respondToInput(1));
  const description = getAnswer("Please describe your task: ");
  const priority = getAnswer("Is this of low, medium, or high priority? ");
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
