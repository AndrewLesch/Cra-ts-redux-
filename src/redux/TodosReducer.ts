import { CREATE_TODO } from "./Types";

const initialState = {
  todos: [],
}


export const todosReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case CREATE_TODO: return {...state, todos: [...state.todos, action.payload]}
    default: return state;
  }
}