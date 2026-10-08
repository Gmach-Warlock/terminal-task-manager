import { checkNum, isCleanString, isValidPriority } from "./helpers/clean.js";
import { getAnswer } from "./getAnswer.js";

// gets title, description, priority for use in add and edit methods
export function addHelper() {
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

function viewAll(instance) {
  instance.viewAllTasks();
}
function taskComplete(instance, id, complete = true) {
  if (complete) return instance.markTaskComplete(id);
  return instance.markTaskIncomplete(id);
}

// gives the first response of the chain for each choice
export function respondToInput(value) {
  const lookup = {
    1: "Please give your task a title: ",
    2: "Here is a list of all of your tasks: ",
    3: "Which task do you want to complete? ",
    4: "Which task do you want to mark incomplete? ",
    5: "Which task do you want to edit? ",
    6: "What is the id of the task you want to delete? ",
    7: "Do you want to search by title or description? ",
    8: "Which category do you want to sort by? ",
    9: "What would you like to filter by? ",
    10: "Are you sure you want to quit? ",
  };
  return lookup[checkNum(value)];
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
