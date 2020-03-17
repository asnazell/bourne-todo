import { ADD_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = ({ task, parentId, maxChildren = 3 }) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task,
    parentId,
    maxChildren
  }
});
