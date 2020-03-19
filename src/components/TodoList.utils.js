export const getSortedTodos = (todos, parentId) => {
  return todos
    .filter(todo => todo.parentId === parentId)
    .map(todo => ({ ...todo, subtasks: getSortedTodos(todos, todo.id) }));
};
