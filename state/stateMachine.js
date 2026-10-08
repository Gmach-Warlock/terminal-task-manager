import { respondToInput } from "../helpers/menuHelpers.js";

function addHelper() {
  const title = getAnswer(respondToInput(1));
  const description = getAnswer("Please describe your task: ");
  const priority = getAnswer("Is this of low, medium, or high priority? ");
  const answers = {
    title,
    description,
    priority,
  };
  console.log(answers);
  return answers;
}

function viewAll(instance) {
  instance.viewAllTasks();
}

function returnAppropriateAction(value, instance) {
  const lookup = {
    1: () => addHelper(),
    2: () => viewAll(instance),
    3: () => console.log("standby"),
    4: () => console.log("standby"),
    5: () => console.log("standby"),
    6: () => console.log("standby"),
    7: () => console.log("standby"),
    8: () => console.log("standby"),
    9: () => console.log("standby"),
    10: () => console.log("roll em up"),
  };
  return lookup[cleanAndConvertNum(value)];
}
