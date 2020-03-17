import { ADD_TODO, COMPLETE_TODO } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export const addTodo = ({ task, parentId, maxChildren = 3 }) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    task,
    parentId,
    maxChildren
  }
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  payload: {
    id
  }
});
