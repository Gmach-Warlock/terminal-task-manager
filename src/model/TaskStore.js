import { logTasks } from "../view/menu.js";

export function myListener() {
  console.log("Tasks have been updated. ");
  logTasks(taskStore.tasks, "all");
}

export class TaskStore {
  static #instance = null;

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
