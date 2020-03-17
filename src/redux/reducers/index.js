import { ADD_TODO } from "../actionTypes";

const initialState = {
  todos: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task, parentId, maxChildren } = action.payload;
      return {
        todos: {
          ...state.todos,
          [id]: {
            task,
            parentId,
            maxChildren
          }
        }
      };
    }
    default:
      return state;
  }
};
