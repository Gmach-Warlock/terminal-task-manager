// get edit task info
export async function getTaskPropToModify() {
  const num = await getNumericInput(
    `
    Please choose a property to modify: 
    1. Title
    2. Description
    3. Priority
    
    Please enter the appropriate number: 
    `,
    3,
  );
  const lookup = {
    1: "title",
    2: "description",
    3: "priority",
  };
  return lookup[num];
}

export async function getEditInfo() {
  const title = await getTaskTitle("edit");
  const prop = await getTaskPropToModify();
  const lookup = {
    title: () => getTaskTitle(false),
    description: () => getTaskDescription(false),
    priority: () => getTaskPriority(false),
  };
  const newValue = await lookup[prop];
  return { title, prop, newValue };
}
