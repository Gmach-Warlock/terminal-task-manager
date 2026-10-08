import readline from "readline";
import {
  checkNum,
  addTaskHelper,
  isValidIndex,
  checkAndConvertNum,
} from "../utils/cleanAndGuard.js";

// creates the readline interface
const rl = readline.createInterface({
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
export async function getAnswer(question) {
  const answer = await askQuestion(question);
  console.log(answer);
  return answer;
}

// Main menu prompt question
export function handlePrompt() {
  const answer = getAnswer("Choose an option: ");
  const cleanAnswer = checkAndConvertNum(answer);
  if (!cleanAnswer) return;
  return cleanAnswer;
}
// filter questions
export async function filterFirstQuestion() {
  const firstAnswer = await getAnswer(`
    Do you Want to filter by priority or completion? 
    1. Priority
    2. Completion

    Please choose 1 or 2: 
    `).toLowerCase();
  if (firstAnswer !== 1 && firstAnswer !== 2) {
    console.log(`Please choose 1 or 2`);
    return;
  }
  return firstAnswer;
}
export async function filterSecondQuestion(number) {
  if (number !== 1 && number !== 2) return;
  const lookup = {
    1: async () =>
      await getAnswer(`
      low, medium, or high priority? 
      1. Low
      2. Medium
      3. High
      4. All

      Please choose one: 
      `).toLowerCase(),
    2: async () =>
      await getAnswer(`
      1. Completed
      2. Not completed
      3. All
      `),
  };
  return lookup[number];
}

// search question
export async function searchQuestion() {
  const searchTerm = await getAnswer(
    `What is the term in the Title to search for? `,
  );
  return searchTerm;
}

// sort questions
export async function sortQuestion() {}
