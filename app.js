import { getAnswer, displayMenu } from "./menuHelpers.js";
import { TaskManager } from "./TaskManager.js";

function app() {
  const taskManager = new TaskManager();
  displayMenu();
  const answer = getAnswer("Choose an option: ");
}

app();
