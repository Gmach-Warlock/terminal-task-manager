class TaskCompletes {
  static #instance = null;
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new TaskCompletes();
    }
    return this.#instance;
  }

  completeTasks;
  incompleteTasks;

  constructor() {
    this.completeTasks = 0;
    this.incompleteTasks = 0;
  }

  addTaskComplete() {
    this.completeTasks++;
  }
  addTaskIncomplete() {
    this.incompleteTasks++;
  }
  subtractTaskComplete() {
    this.completeTasks--;
  }
  subtractTaskIncomplete() {
    this.incompleteTasks--;
  }
}

export const taskCompletes = TaskCompletes.getInstance();
