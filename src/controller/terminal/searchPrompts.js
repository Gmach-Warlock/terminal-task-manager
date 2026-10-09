import { getAnswer } from "./terminal";

export async function getSearchTerms() {
  const answer = await getAnswer(
    `What is the term in the title to search for? `,
  );
  if (!answer) {
    console.log("Please provide an answer");
    return;
  }
  return answer;
}
