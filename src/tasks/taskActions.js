function addTaskHelper(instance) {
  const lookup = addHelper();
  instance.addTask(lookup.title, lookup.description, lookup.priority);
}
