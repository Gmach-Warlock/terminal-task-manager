// guard functions
export function isCleanString(str) {
  if (typeof str !== "string") return false;
  return true;
}
export function isValidPriority(string) {
  if (!isCleanString) return false;
  if (string !== "low" && string !== "medium" && string !== "high")
    return false;
  return true;
}
export function isValidIndex(arr, id) {
  const index = arr.findIndex((item) => item.id === id);
  if (index === -1) {
    console.log(`Index not found!`);
    return false;
  }
  return true;
}
// makes sure number is in range, then converts to string for lookup
export function checkNum(number) {
  let numVal = Number(number);
  if (numVal > 10 || numVal < 1) return;
  let stringVal = String(numVal);
  return stringVal;
}

// gets title, description, priority for use in add and edit methods
export function addHelper() {
  const title = getAnswer(respondToInput(1));
  const description = getAnswer("Please describe your task: ");
  const priority = getAnswer("Is this of low, medium, or high priority? ");
  if (
    !isCleanString(title) ||
    !isCleanString(description) ||
    !isCleanString(priority)
  )
    return;
  if (!isValidPriority(priority)) return;
  return {
    title,
    description,
    priority,
  };
}
