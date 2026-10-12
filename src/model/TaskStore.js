import { logTasks, mainMenu } from "../view/menu.js";
import { taskTotals } from "./TaskTotals.js";

export function myListener() {
  if (taskTotals.total > 0) {
    console.log("Tasks have been updated. ");
    logTasks(taskStore.tasks, "all");
    mainMenu();
  }
}

export class TaskStore {
  static #instance = null;

  tasks;
  listeners;

  constructor() {
    this.tasks = [];
    this.listeners = [];
  }

  notify() {
    this.listeners.forEach(() => {
      myListener();
    });
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new TaskStore();
    }
    return this.#instance;
  }

  setTasks(tasks) {
    this.tasks = tasks;
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }
}

export const taskStore = TaskStore.getInstance();

// subscribe to the listener for the app
taskStore.subscribe(myListener());
