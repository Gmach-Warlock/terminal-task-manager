import readline from "readline";
import {
  isCleanString,
  cleanNumericInput,
} from "../../controller/tasks/taskValidator.js";

// creates the readline interface
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// helper to getAnswer
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// returns the input value entered by the user in the terminal
async function getAnswer(question) {
  const answer = await askQuestion(question);
  return answer;
}

export async function getNumericInput(message, numOfOptions) {
  let hasAnswer = false;
  let answer;

  while (!hasAnswer) {
    answer = await getAnswer(message);
    if (answer === "") {
      console.log("Please enter the appropriate value: ");
      continue;
    }
    if (cleanNumericInput(answer, 1, numOfOptions)) hasAnswer = true;
  }
  return answer;
}

export async function getStringInput(message) {
  let hasAnswer = false;
  let answer;
  while (!hasAnswer) {
    answer = await getAnswer(message);
    if (!isCleanString(answer)) {
      continue;
    }
    if (isCleanString(answer)) hasAnswer = true;
  }
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
