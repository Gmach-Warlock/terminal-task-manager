import { rl } from "../controller/terminal/terminal.js";

class TaskApp {
  static #instance = null;

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new TaskApp();
    }
    return this.#instance;
  }
  running;

  constructor() {
    this.running = true;
  }

  quitApp() {
    this.running = false;
    rl.close();
  }
}

export const taskApp = TaskApp.getInstance();
