export function addItem(arr, item) {
  // edit existing item
  if (arr.some((itm) => itm.title === item.title)) {
    const newArray = arr.map((existing) => {
      return existing.title === item.title ? item : existing;
    });
    return newArray;
  }
  // add new item
  const newArray = [...arr, item];
  return newArray;
}

export function deleteItem(arr, title) {
  const newArray = arr.filter((item) => item.title !== title);
  return newArray;
}

export function editItem(arr, title, prop, newValue) {
  console.log(`in edit item`);
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
  const newArray = arr.filter((item) => item[category] === value);
  return newArray;
}
