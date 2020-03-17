import { ADD_TODO } from "../actionTypes";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log("implement ADD_TODO");
      //   const { id, content } = action.payload;
      //   return {
      //     ...state,
      //     allIds: [...state.allIds, id],
      //     byIds: {
      //       ...state.byIds,
      //       [id]: {
      //         content,
      //         completed: false
      //       }
      //     }
      //   };
      return state;
    }
    default:
      return state;
  }
};
