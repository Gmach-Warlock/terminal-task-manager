import { mainMenu } from "../../view/menu.js";

export function addItem(arr, itm) {
  if (!arr || !itm) {
    console.log("Invalid item provided");
    return;
  }
  const exists = arr.some(
    (existing) => existing && existing.title === itm.title,
  );
  if (exists) {
    const newArray = [...arr].map((existing) => {
      return existing.title === itm.title ? itm : existing;
    });
    return newArray;
  }
  const newArray = [...arr, itm];
  return newArray;
}

export function deleteItem(arr, title) {
  const newArray = arr.filter((item) => item.title !== title);
  return newArray;
}

export function editItem(arr, title, prop, newValue) {
  const newArray = [...arr];
  const itemToEdit = newArray.find((item) => item._title === title);
  if (!itemToEdit) {
    console.log("Item with that term in title does not exist");
    mainMenu();
    return;
  }
  itemToEdit[prop] = newValue;
  return itemToEdit;
}

export function filterByCategory(arr, category, value) {
  const newArray = arr.filter((item) => item[category] === value);
  return newArray;
}
