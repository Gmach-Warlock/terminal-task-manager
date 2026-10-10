import Task from "../../model/Task.js";

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

// console.log(createTask("First Task", "Description of first task", "low"));
