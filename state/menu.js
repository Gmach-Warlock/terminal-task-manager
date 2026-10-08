import { displayMenu, respondToInput, getAnswer } from "../helpers/terminal.js";

export async function mainMenu() {
  console.log(`Welcome to Task Manager`);
  displayMenu();
  let answer = await getAnswer("Choose an option: ");
  answer = Number(answer);

  console.log(respondToInput(answer));
}

mainMenu();
