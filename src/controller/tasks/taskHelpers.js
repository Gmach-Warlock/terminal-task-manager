import {
  isCleanString,
  isValidPriority,
  isValidCategory,
} from "./taskValidator.js";

export function addItem(arr, itm) {
  if (!Array.isArray(arr) || !itm || !isValidPriority(itm.priority)) {
    console.log("Item with that title not found. Returning to main menu");
    return arr || [];
  }

  const index = arr.findIndex(
    (existing) => existing && existing.title === itm.title,
  );
  if (index !== -1) {
    const newArray = arr.map((existing) => {
      return existing.title === itm.title ? itm : existing;
    });
    return newArray;
  }
  return [...arr, itm];
}

export function deleteItem(arr, itm) {
  if (!Array.isArray(arr) || !itm || !isCleanString(itm.title)) {
    return;
  }
  console.log("in and past guard", arr, itm);
  const foundItem = arr.find((i) => i.title === itm.title);
  console.log(foundItem);
  if (!foundItem) return arr;
  const newArray = arr.filter((item) => item.title !== itm.title);
  return newArray;
}

export function editItem(arr, title, prop, newValue) {
  if (!arr || !title || !prop || newValue === undefined || newValue === null) {
    console.log("failing edit item 1st guard ", arr, title, prop, newValue);
    return;
  }
  if (!Array.isArray(arr) || !isCleanString(title) || !isCleanString(prop)) {
    console.log("failing editItem 2nd guard:", {
      isArray: Array.isArray(arr),
      isCleanTitle: isCleanString(title),
      isCleanProp: isCleanString(prop),
      propValue: prop,
    });
    return;
  }
  const newArray = [...arr];
  const itemToEdit = newArray.find(
    (item) => item._title === title || item.title === title,
  );
  if (!itemToEdit) {
    // console.log("Item with that term in title does not exist");
    return;
  }
  itemToEdit[prop] = newValue;
  return itemToEdit;
}

export function filterByCategory(arr, category, value) {
  if (!arr || !category || value === undefined || value === null) return;
  if (!Array.isArray(arr) || !isValidCategory(category)) return;
  const newArray = arr.filter((item) => item[category] === value);
  return newArray;
}

export function updateStoreArr(newArray, store, storeMethod) {
  if (!newArray || !store || !storeMethod) return;
  if (typeof storeMethod !== "function") return;
  return storeMethod.call(store, newArray);
}

export function updateStats(store, storeMethod) {
  if (!store || !storeMethod) return;
  if (typeof storeMethod !== "function") return;
  return storeMethod.call(store);
}
