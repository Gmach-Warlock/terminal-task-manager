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
  const itemToEdit = arr.find((item) => item.title === title);
  if (!itemToEdit) {
    console.log("Item with that term in title does not exist");
    return;
  }
  const newItem = {
    ...itemToEdit,
    [prop]: newValue,
  };
  return newItem;
}

export function filterByCategory(arr, category, value) {
  const newArray = arr.filter((item) => item[category] === value);
  return newArray;
}

export function sortItems(arr, category) {
  const lookup = {
    newest: () =>
      [...arr].sort((a, b) => new Date(b.createAt) - new Date(a.createAt)),
    oldest: () =>
      [...arr].sort((a, b) => new Date(a.createAt) - new Date(b.createAt)),
  };
  const newArray = lookup[category];
  return newArray;
}
