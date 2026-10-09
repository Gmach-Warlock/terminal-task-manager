import { getAnswer } from "./terminal.js";
// these functions return string values which will be used in taskFilters.js
export async function getFilterInput() {
  const answer = await getAnswer(`
    Please choose a filter type: 
    1. Complete
    2. Incomplete
    3. All
    
    Please choose 1, 2, or 3:  `);
  if (answer !== 1 && answer !== 2 && answer !== 3) return;
  return answer;
}

console.log(getFilterInput());
