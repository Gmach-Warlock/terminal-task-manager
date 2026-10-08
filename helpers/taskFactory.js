import Task from "../classes/Task.js";

function timeStamp() {
  const newUnformatted = new Date();
  const date = newUnformatted.toISOString();
  return date;
}

export default function taskFactory(id, title, description, priority) {
  return new Task(id, title, description, priority, timeStamp());
}
