// makes sure number is in range, then converts to string for lookup
export function checkNum(number) {
  let numVal = Number(number);
  if (numVal > 10 || numVal < 1) return;
  let stringVal = String(numVal);
  return stringVal;
}

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
