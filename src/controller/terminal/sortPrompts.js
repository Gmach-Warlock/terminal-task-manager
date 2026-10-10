export async function getSortCriteria() {
  const answer = await getNumericInput(
    `
        Please choose a sort criteria: 
        1. Newest first
        2. Oldest first
        3. Low Priority first
        4. Medium Priority first
        5. High Priority first

        Please choose the appropriate number: 
        `,
    5,
  );
  const lookup = {
    1: "newest",
    2: "oldest",
    3: "low",
    4: "medium",
    5: "high",
  };
  return lookup[answer];
}
