import taskFactory from "../helpers/taskFactory.js";

export class TaskManager {
  tasks;
  size;
  totalCreated;
  constructor() {
    this.tasks = [];
    this.size = 0;
    this.totalCreated = 0;
  }
  addTask(title, description, priority) {
    const id = this.totalCreated + 1;
    this.tasks.push(taskFactory(id, title, description, priority));
    this.totalCreated++;
    this.size++;
  }
  viewAllTasks() {
    console.log(this.tasks);
  }
  markTaskComplete(id) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) console.log("index not found!");
    this.tasks[index].completed = true;
    console.log(this.tasks[index]);
  }
  markTaskIncomplete(id) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) console.log("index not found!");
    this.tasks[index].completed = false;
    console.log(this.tasks[index]);
  }
  deleteTask(id) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) console.log("index not found!");
    this.tasks.splice(index, 1);
  }
  editTask(id, newTitle, newDescription) {
    const index = this.tasks.findIndex((item) => item.id === id);
    if (index === -1) console.log("index not found!");
    this.tasks[index].title = newTitle;
    this.tasks[index].description = newDescription;
  }
  searchForTask(newTask) {
    console.log(newTask);
  }
  filterTasks(newTask) {
    console.log(newTask);
  }
  sortTasks(newTask) {
    console.log(newTask);
  }
}
/* 
const boss = new TaskManager();
boss.addTask("1", "Task 1", "High");
boss.addTask("2", "Task 2", "High");
boss.addTask("3", "Task 3", "High");
boss.viewAllTasks();
boss.deleteTask(2);
boss.viewAllTasks(); */
