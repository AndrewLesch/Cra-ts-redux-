import { CREATE_TODO, TOGGLE_TODO } from './Types';
import { TodoType } from '../model';

const initialState = {
  todos: [] as TodoType[],
};

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TOGGLE_TODO:
      const newTodos: TodoType[] = state.todos.map((todo) => {
        const todoCopy = { ...todo };
        if (todoCopy.id === action.payload) {
          todoCopy.completed = !todoCopy.completed;
        }
        return todoCopy;
      });
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};
