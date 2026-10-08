export function taskFilterByComplete(arr, type) {
  if (type !== "complete" && type !== "incomplete" && type !== "all") return;
  const lookup = {
    all: () => arr.map((item) => item),
    complete: () => arr.filter((item) => item.complete === true),
    incomplete: () => arr.filter((item) => item.complete === false),
  };
  const newArray = lookup[type]();
  return newArray;
}

export function taskFilterByPriority(arr, priority) {
  if (priority !== "low" && priority !== "medium" && priority !== "high")
    return;
  const newArray = arr.filter((item) => item.priority === priority);
  return newArray;
}

const arr1 = [
  { id: 1, complete: false, priority: "low" },
  { id: 2, complete: true, priority: "medium" },
  { id: 3, complete: false, priority: "high" },
  { id: 4, complete: true, priority: "low" },
  { id: 5, complete: false, priority: "high" },
];

console.log(taskFilterByPriority(arr1, "low"));
