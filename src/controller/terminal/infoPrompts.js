import { title } from "node:process";
import { getAnswer } from "./terminal";

// This is used to get the basic info used to create new tasks
export async function getTaskInfo(type) {
  if (type !== "title" && type !== "description" && title !== "priority")
    return;
  const lookup = {
    title: "What is the title of your task? ",
    description: "Please give a short description of your task: ",
    priority: "Is this of low, medium, or high priority? ",
  };
  const answer = await getAnswer(lookup[type]);
  if (!answer) throw new Error("Something went wrong.");
  return answer;
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
