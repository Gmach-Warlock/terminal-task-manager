import readline from "readline";
import { checkNum, addTaskHelper } from "../utils/cleanAndGuard.js";

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

export function handlePrompt() {
  const answer = getAnswer("Choose an option: ");
}

// returns appropriate action sequence based on input
export function returnAppropriateAction(value, instance) {
  const lookup = {
    1: () => addTaskHelper(instance),
    2: () => viewAll(instance),
    3: () => {
      const id = getAnswer("What is the id of the task to mark complete? ");
      taskComplete(instance, id);
    },
    4: () => {
      const id = getAnswer("What is id of the task to mark incomplete? ");
      taskComplete(instance, id, false);
    },
    5: () => console.log("standby"),
    6: () => console.log("standby"),
    7: () => console.log("standby"),
    8: () => console.log("standby"),
    9: () => console.log("standby"),
    10: () => console.log("roll em up"),
  };
  return lookup[checkNum(value)];
}
