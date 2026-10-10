import { getStringInput } from "./terminal.js";

export async function getSearchCriteria() {
  const searchTerm = await getStringInput(`What is the term to search for? `);
  const cleanedTerm = searchTerm.toLowerCase();
  return cleanedTerm;
}
