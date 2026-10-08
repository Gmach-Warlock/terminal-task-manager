import createTask from "./taskFactories.js";
import { isValidIndex } from "../helpers/clean.js";

export class TaskManagerSingleton {
  static #instance = null;

  tasks;
  size;
  totalCreated;
  constructor() {
    this.tasks = [];
    this.size = 0;
    this.totalCreated = 0;
  }
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new TaskManager();
    }
    return this.#instance;
  }
  addTask(title, description, priority) {
    const id = this.totalCreated + 1;
    this.tasks.push(createTask(id, title, description, priority));
    this.totalCreated++;
    this.size++;
  }
  viewAllTasks() {
    console.log(this.tasks);
  }
  markTaskComplete(id) {
    if (!isValidIndex(this.tasks, id)) return;
    this.tasks[index].completed = true;
  }
  markTaskIncomplete(id) {
    if (!isValidIndex(this.tasks, id)) return;
    this.tasks[index].completed = false;
  }
  deleteTask(id) {
    if (!isValidIndex(this.tasks, id)) return;
    this.tasks.splice(index, 1);
  }
  editTask(id, newTitle, newDescription) {
    if (!isValidIndex(this.tasks, id)) return;
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

export const TaskManager = TaskManagerSingleton.getInstance();
const TaskManager2 = TaskManagerSingleton.getInstance();
console.log(TaskManager);
console.log(TaskManager2);
