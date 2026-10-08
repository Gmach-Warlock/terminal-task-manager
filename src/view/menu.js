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
}

export function logTasks(arr) {
  console.log(`
    Here are the current tasks: 
  `);
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
