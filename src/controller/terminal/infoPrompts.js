import { isCleanString } from "../tasks/taskValidator.js";
import { getNumericInput, getStringInput } from "./terminal.js";

// get title for edit or mark
export async function getTaskTitle(type) {
  if (
    type !== "add" &&
    type !== "edit" &&
    type !== "delete" &&
    type !== "complete" &&
    type !== "incomplete"
  )
    return;
  const lookup = {
    add: "Please give a title to your new task: ",
    edit: "What is the title of the task to edit? ",
    delete: "What is the title of the task to delete? ",
    complete: "What is the title of the task to mark complete? ",
    incomplete: "What is the title of the task to mark incomplete? ",
  };
  const title = await getStringInput(lookup[type]);
  return title;
}

export async function getTaskDescription(newTask = true) {
  const lookup = {
    new: "Please give a brief description to your new task: ",
    edit: "Please give a new description to your task: ",
  };
  const type = newTask ? "new" : "edit";
  const description = getStringInput(lookup[type]);
  return description;
}

export async function getTaskPriority(newTask = true) {
  console.log("getting priority");
  const lookup = {
    new: `Is this new task a low, medium, or high priority?`,
    edit: `Is the new priority low, medium, or high? `,
  };
  const type = newTask ? "new" : "edit";
  const priority = await getNumericInput(
    `
${lookup[type]}
1. Low
2. Medium
3. High

Please choose the appropriate value: 
    `,
    3,
  );
  const lookup2 = {
    1: "Low",
    2: "Medium",
    3: "High",
  };
  console.log("answers", type, priority);
  return lookup2[priority];
}

export async function getAddInfo() {
  const title = await getTaskTitle("add");
  const description = await getTaskDescription();
  const priority = await getTaskPriority();
  return { title, description, priority };
}

export async function getDeleteTitle() {
  const title = await getTaskTitle("delete");
  if (!isCleanString(title)) return;
  return title;
}

export async function getMarkTitle(complete = true) {
  const title = complete
    ? await getTaskTitle("complete")
    : await getTaskTitle("incomplete");
  if (!isCleanString(title)) return;
  return title;
}
