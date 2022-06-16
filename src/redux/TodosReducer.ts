import {
  CREATE_TODO,
  SET_IS_FILTERED,
  TOGGLE_TODO,
  SET_SORTED_BY,
  SET_SORT_ORDER,
  SET_OPENED_TODO,
  DELETE_TODO,
} from './Constants';
import { StateType, TodoType } from '../model';

const initialState: StateType = {
  todos: [] as TodoType[],
  isFiltered: true as boolean,
  sortedBy: 'Title' as string,
  sortOrder: 'Direct' as string,
  openedTodo: {} as TodoType,
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
    case SET_OPENED_TODO:
      return { ...state, openedTodo: action.payload };
    case DELETE_TODO: {
      const newTodos: TodoType[] = state.todos;
      const currentTodoId = newTodos.findIndex((todo) => {
        const todo1: TodoType = { ...todo };
        return todo1.id === action.payload;
      });
      if (currentTodoId !== -1) {
        newTodos.splice(currentTodoId, 1);
        return { ...state, todos: newTodos, openedTodo: {} };
      }
      return;
    }
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
