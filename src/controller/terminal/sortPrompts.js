import { checkAndConvertNum } from "../../utils/cleanAndGuard.js";
import { returnAppropriateAction } from "../tasks/taskActions.js";
import { getAnswer } from "./terminal.js";

export async function getSortInput1() {
  const message = `
  What is the sorting criteria?
  1. Time of Creation
  2. Priority
  3. Info

  Please choose 1, 2, or 3: 
  `;
  let hasAnswer = false;
  let answer = await getAnswer(message);
  while (!hasAnswer) {
    if (!checkAndConvertNum(answer, 1, 3)) {
      console.log(`Please enter 1, 2, or 3`);
      answer = await getAnswer(message);
    }
    if (checkAndConvertNum(answer, 1, 3)) hasAnswer = true;
  }

  const lookup = {
    1: "createdAt",
    2: "priority",
    3: "info",
  };
  console.log(lookup[answer]);
  return lookup[answer];
}
// Get value to use in getSortInput2 (decoupled to keep functions small)
export async function getSortValue2(type) {
  if (type !== "createdAt" && type !== "priority" && type !== "info") return;
  const questionLookup = {
    createdAt: `
    Sort by : 
    1. Newest 
    2. Oldest
    `,
    priority: `
    Sort by which priority? 
    1. Low
    2. Medium
    3. High 
    `,
    info: `
    Please choose a sort criteria: 
    1. Title
    2. Description
    `,
  };
  const answer = await getAnswer(questionLookup[type]);
  if (answer !== 1 && answer !== 2 && answer !== 3) return;
  return answer;
}

export async function getSortInput2(value) {
  if (value !== 1 && value !== 2 && value !== 3) return;
  const answerLookup = {
    createdAt: {
      1: "newest",
      2: "oldest",
    },
    priority: {
      1: "low",
      2: "medium",
      3: "high",
    },
    info: {
      1: "title",
      2: "description",
    },
  };
  return answerLookup[value];
}

console.log(getSortInput1());
