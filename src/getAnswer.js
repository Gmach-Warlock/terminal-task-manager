import readline from "readline";

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
