export function isCleanString(str) {
  const htmlRegex = /<[^>]*>/;
  // This regex.test returns true if there is an html tag in the string
  if (htmlRegex.test(str)) {
    console.log("No HTML allowed!");
    return false;
  }
  if (str === "") {
    console.log("Please enter something in the field");
    return false;
  }
  // Guard against numeric values in string fields
  if (!isNaN(str)) {
    console.log("Please enter a string, not a number ");
    return false;
  }
  if (typeof str !== "string") {
    console.log("Please use strings, not booleans or other data types.");
    return false;
  }

  return true;
}
export function isValidPriority(string) {
  if (!isCleanString) return false;
  if (string !== "low" && string !== "medium" && string !== "high")
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

export function isValidCategory(category) {
  if (!category) return false;
  if (category !== "completed" && category !== "priority") return false;
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

// makes sure number is in range, then converts to string for lookup
export function cleanNumericInput(number, min = 1, max = 10) {
  if (!isValidNumber(number)) {
    return;
  }
  if (number > max || number < min) {
    console.log(
      `Please enter the appropriate value. The value given was out of range. `,
    );
    return;
  }
  let stringVal = String(number);
  return stringVal;
}

export function taskValidator(task) {
  if (!task.description || !task.title || !task.priority) return false;
  if (
    !isCleanString(task.description) ||
    !isCleanString(task.title) ||
    !isValidPriority(task.priority)
  )
    return false;

  return true;
}
