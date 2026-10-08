import createTask from "../controller/taskFactories.js";
import { isValidIndex } from "../utils/cleanAndGuard.js";

// Singleton class. Instance is exported on the bottom
export class TaskManagerSingleton {
  static #instance = null;

  tasks;
  listeners;
  size;
  totalCreated;
  constructor() {
    this.tasks = [];
    this.listeners = [];
    this.size = 0;
    this.totalCreated = 0;
  }
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new TaskManagerSingleton();
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
    this.tasks.filter((task) => task.id !== id);
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

  notify() {}
  subscribe(listener) {
    this.listeners.push(listener);
  }
}

export const TaskManager = TaskManagerSingleton.getInstance();
