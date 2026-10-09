export class ClassStore {
  static #instance = null;

  constructor() {
    this.tasks = [];
    this.listeners = [];
  }

  notify() {
    this.listeners.forEach((listener) => {
      listener(this.tasks);
    });
  }

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new ClassStore();
    }
    return this.#instance;
  }

  setTasks(tasks) {
    this.tasks = tasks;
    this.notify;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }
}
