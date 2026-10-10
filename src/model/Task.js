export class Task {
  id;
  #title;
  #description;
  #completed;
  #priority;
  createdAt;

  constructor(title, description, priority) {
    this.id = crypto.randomUUID();
    this._title = title;
    this._description = description;
    this._completed = false;
    this._priority = priority;
    this.createdAt = new Date().toISOString();
  }

  get id() {
    return this.id;
  }
  get title() {
    return this._title;
  }
  set title(newTitle) {
    this._title = newTitle;
  }
  get description() {
    return this._description;
  }
  set description(newDescription) {
    this._description = newDescription;
  }
  get completed() {
    return this._completed;
  }
  set completed(newCompleted) {
    this._completed = newCompleted;
  }
  get priority() {
    return this._priority;
  }
  set priority(newPriority) {
    this._priority = newPriority;
  }
  get createdAt() {
    return this.createdAt;
  }
}
