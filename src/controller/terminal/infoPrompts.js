import { getAnswer, getStringInput } from "./terminal.js";

// get title for edit or mark
export async function getTitle(type) {
  if (type !== "add" && type !== "edit" && type !== "delete") return;
  const lookup = {
    add: "Please give a title to your new task: ",
    edit: "What is the title of the task to edit? ",
    delete: "What is the title of the task to delete? ",
  };
  const title = await getStringInput(lookup[type]);
  return title;
}

// get edit task info
export async function getPropToModify() {
  const num = await getNumericInput(
    `
    Please choose a property to modify: 
    1. Title
    2. Description
    3. Priority
    
    Please enter the appropriate number: 
    `,
    3,
  );
  const lookup = {
    1: "title",
    2: "description",
    3: "priority",
  };
  return lookup[num];
}

// final confirmation returns true or false
export async function getFinalConfirmation() {
  const answer = await getAnswer(`
        Are you sure? 
        1. No
        2. Yes
        `);
  if (answer !== 1 && answer !== 2) {
    console.log(`
            Action Cancelled: Please choose 1 or 2
            `);
    return;
  }
  const lookup = {
    1: false,
    2: true,
  };
  return lookup[answer];
}
