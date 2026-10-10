import { getNumericInput } from "./terminal";

export async function getFilterInfo() {
  const numInput = await getNumericInput(
    `
    Please choose a filter criteria: 
    1. Completed
    2. Not Completed
    3. Low Priority
    4. Medium Priority
    5. High Priority
    6. All
    `,
    6,
  );
  const lookup = {
    1: "completed",
    2: "notCompleted",
    3: "low",
    4: "medium",
    5: "high",
    6: "all",
  };
  return lookup[numInput];
}
