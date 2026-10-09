import { displayMenu } from "./src/view/menu.js";
import { TaskManager } from "./src/model/TaskManager.js";
import { getAnswer } from "./src/controller/terminal/terminal.js";

async function app() {
  TaskManager.viewAllTasks();
  displayMenu();
  const answer = await getAnswer("Choose an option: ");
  console.log(answer);
}

app();
