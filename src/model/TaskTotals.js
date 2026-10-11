export class TaskTotals {
  static #instance = null;
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new TaskTotals();
    }
    return this.#instance;
  }
  total;
  size;
  constructor() {
    this.total = 0;
    this.size = 0;
  }

  addTaskTotals() {
    this.total++;
    this.size++;
  }
  removeTaskTotals() {
    this.size--;
  }
}

export const taskTotals = TaskTotals.getInstance();
