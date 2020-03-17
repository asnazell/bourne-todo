import { ADD_TODO, COMPLETE_TODO } from "../actionTypes";

const initialState = {
  todos: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      task: "finish coding challenge",
      parentId: undefined,
      maxChildren: 3
    },
    {
      id: "2c5ea4c0-4067-11e9-8b2d-1b9d6bcdbbfd",
      task: "demo todo application",
      parentId: undefined,
      maxChildren: 3
    },
    {
      id: "ae02ef6e-b983-4333-853d-c37c7be44456",
      task: "quit old job",
      parentId: undefined,
      maxChildren: 3
    },
    {
      id: "85db7241-d9ea-4dc6-a424-3b998cd9a99a",
      task: "start working at bourne",
      parentId: undefined,
      maxChildren: 3
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, action.payload]
      };
    }
    case COMPLETE_TODO: {
      const { id } = action.payload;
      return {
        todos: state.todos.filter(todo => todo.id !== id)
      };
    }
    default:
      return state;
  }
};
