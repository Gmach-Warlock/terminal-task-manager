import { itemExistsInArray } from "./taskValidator";

export function isValidItemForArray(arr, itm, prop) {
  if (!isValidArray(arr)) return false;
  if (typeof itm !== "object" || itm === null) return false;
  if (typeof prop !== "string") return false;
  if (!Object.hasOwn(itm, prop)) return false;
  if (!itemExistsInArray(arr, itm)) return false;
  return true;
}

export function isValidPriority(string) {
  if (!isCleanString(string)) return false;
  const lowerCased = string.toLowerCase();
  if (lowerCased !== "low" && lowerCased !== "medium" && lowerCased !== "high")
    return false;
  return true;
}

export function isValidNumber(number) {
  let numVal = Number(number);
  // checks for strings in numeric fields
  if (Number.isNaN(numVal)) {
    console.log(
      "Please enter the appropriate value. Strings are not accepted. ",
    );
    return false;
  }
  return true;
}

export function isValidArray(arr) {
  if (!Array.isArray(arr)) return false;
  return true;
}
export function isValidCategory(category) {
  if (!category) return false;
  if (category !== "completed" && category !== "priority") return false;
  return true;
}

export function isValidStatus(status) {
  if (!status) return false;
  if (status !== "complete" && status !== "incomplete" && status !== "all")
    return false;
  return true;
}

export function isValidSortType(type) {
  if (!type) return false;
  if (
    type !== "newest" &&
    type !== "oldest" &&
    type !== "low" &&
    type !== "high"
  )
    return false;
  return true;
}

export function isValidInfo(infoObj) {
  if (!infoObj.description || !infoObj.title || !infoObj.priority) return false;
  if (
    !isCleanString(infoObj.description) ||
    !isCleanString(infoObj.title) ||
    !isValidPriority(infoObj.priority)
  )
    return false;

  return true;
}
