import { isValidSortType } from "./taskValidator.js";

export function searchArray(arr, term) {
  if (!arr || !term) return;
  const cleanedTerm = term.toLowerCase();
  const newArray = arr.filter((task) =>
    task.title.toLowerCase().includes(cleanedTerm),
  );
  if (!newArray) {
    console.log("Search term not found.");
    return;
  }
  return newArray;
}

export function sortItems(arr, category) {
  if (!arr || !category || !Array.isArray) return;
  if (!isValidSortType(category)) return;
  const priorityRank = {
    low: 1,
    medium: 2,
    high: 3,
  };
  const lookup = {
    newest: () =>
      [...arr].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    oldest: () =>
      [...arr].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    high: () =>
      [...arr].sort(
        (a, b) =>
          priorityRank[b.priority?.toLowerCase()] -
          priorityRank[a.priority?.toLowerCase()],
      ),
    low: () =>
      [...arr].sort(
        (a, b) =>
          priorityRank[a.priority?.toLowerCase()] -
          priorityRank[b.priority?.toLowerCase()],
      ),
  };
  const newArray = lookup[category]();
  return newArray;
}
