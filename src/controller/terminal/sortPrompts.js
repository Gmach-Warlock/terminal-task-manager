import { getNumericInput } from "./terminal.js";

export async function getSortCriteria() {
  const answer = await getNumericInput(
    `
Please choose a sort criteria: 
1. Newest first
2. Oldest first
3. Low Priority first
4. High Priority first

Please choose the appropriate number: 
        `,
    4,
  );
  const lookup = {
    1: "newest",
    2: "oldest",
    3: "low",
    4: "high",
  };
  return lookup[answer];
}
