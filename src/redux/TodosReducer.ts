import {
  CREATE_TODO,
  SET_IS_FILTERED,
  TOGGLE_TODO,
  SET_SORTED_BY,
  SET_SORT_ORDER,
} from './Types';
import { TodoType } from '../model';

const initialState = {
  todos: [] as TodoType[],
  isFiltered: true as boolean,
  sortedBy: 'Title' as string,
  sortOrder: 'Direct' as string,
};

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_FILTERED:
      return { ...state, isFiltered: action.payload };
    case SET_SORTED_BY:
      return { ...state, sortedBy: action.payload };
    case SET_SORT_ORDER:
      return { ...state, sortOrder: action.payload };
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TOGGLE_TODO:
      const newTodos: TodoType[] = state.todos.map((todo) => {
        const todoCopy: TodoType = { ...todo };
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
