import { returnAppropriateAction } from "../controller/tasks/taskActions.js";
import { getNumericInput } from "../controller/terminal/terminal.js";

// displays the main menu prompt
export function displayMenu() {
  console.log(`
    Welcome to the Task Manager
    
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
  return;
}

export function logTasks(arr, type) {
  const lookup = {
    all: "Here are all of the tasks: ",
    filter: "Here are the filtered results: ",
    search: "Here are the search results: ",
    sort: "Here are the sorted results: ",
  };
  if (
    type !== "all" &&
    type !== "filter" &&
    type !== "search" &&
    type !== "search"
  )
    return;
  console.log(lookup[type]);
  arr.forEach((item) =>
    console.log(`
    
    title: ${item.title}, 
    description: ${item.description},
    priority: ${item.priority},
    isCompleted: ${item.completed}, 
    -------------------------------------
    `),
  );
}

export async function mainMenu() {
  displayMenu();
  const answer = await getNumericInput("Choose an option: ");
  returnAppropriateAction(answer);
}

mainMenu();
