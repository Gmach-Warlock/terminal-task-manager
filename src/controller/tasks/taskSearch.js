import { isCleanString } from "../../utils/cleanAndGuard";

export function searchTasks(arr, searchTerm) {
  if (!isCleanString(searchTerm)) return;
  const cleanedTerm = searchTerm.toLowerCase();
  return arr.filter((task) => task.title.toLowerCase().includes(cleanedTerm));
}
