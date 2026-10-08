import { checkNum, isCleanString, isValidPriority } from "./clean.js";
import { getAnswer } from "./getAnswer.js";
// displays the main menu prompt
export function displayMenu() {
  console.log(`
    What would you like to do?
    
    1. Add a task
    2. View all tasks
    3. Mark task complete
    4. Mark task incomplete
    5. Edit task
    6. Delete task
    7. Search tasks
    8. Sort tasks
    9. Filter tasks
    10. Exit 
    
    `);
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
