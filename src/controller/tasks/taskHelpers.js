import {
  isCleanString,
  isValidCategory,
  isValidPriority,
  isValidSortType,
} from "./taskValidator.js";

export function addItem(arr, itm) {
  if (!Array.isArray(arr) || !itm || !isValidPriority(itm.priority)) {
    return;
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
  const foundItem = arr.find((i) => i.title === itm.title);
  if (!foundItem) return arr;
  const newArray = arr.filter((item) => item.title !== itm.title);
  return newArray;
}

export function editItem(arr, title, prop, newValue) {
  if (!arr || !title || !prop || !newValue) return;
  if (!Array.isArray(arr) || !isCleanString(title) || !isCleanString(newValue))
    return;
  const newArray = [...arr];
  const itemToEdit = newArray.find((item) => item._title === title);
  if (!itemToEdit) {
    console.log("Item with that term in title does not exist");
    return;
  }
  itemToEdit[prop] = newValue;
  return itemToEdit;
}

export function filterByCategory(arr, category, value) {
  if (!arr || !category || !value) return;
  if (!Array.isArray(arr) || !isValidCategory(category)) return;
  const newArray = arr.filter((item) => item[category] === value);
  return newArray;
}

export function updateStoreArr(newArray, store, storeMethod) {
  if (!newArray || !store || !storeMethod) return;
  if (typeof storeMethod !== "function") return;
  return storeMethod.call(store, newArray);
}

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
