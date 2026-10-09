import { getAnswer } from "./terminal";
// these functions return string values which will be used in taskFilters.js
export async function getFilterInput1() {
  const answer = await getAnswer(`
    Please choose a filter type: 
    1. Completion
    2. Priority 
    
    Please enter 1 or 2`);
  if (answer !== 1 && answer !== 2) return;
  const lookup = {
    1: "complete",
    2: "priority",
  };
  return lookup[answer];
}

export async function getFilterInput2(type) {
  if (type !== "complete" && type !== "priority") return;
  const questionLookup = {
    complete: `
    Please choose which items to filter: 
    1. Complete
    2. Incomplete
    3. All
    `,
    priority: `
    Please choose which priority items to filter: 
    1. Low
    2. Medium
    3. High
    4. All
    `,
  };
  const answer = await questionLookup[type];
  const answerLookup = {
    complete: {
      1: "complete",
      2: "incomplete",
      3: "all",
    },
    priority: {
      1: "low",
      2: "medium",
      3: "high",
    },
  };
  return answerLookup[type][answer];
}
