import {
  CREATE_TODO,
  SET_IS_FILTERED,
  TOGGLE_TODO,
  SET_SORTED_BY,
  SET_SORT_ORDER,
  SET_OPENED_TODO,
  DELETE_TODO,
} from './Types';
import { TodoType } from '../model';

const initialState = {
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
    case DELETE_TODO:
      const newTodos1: TodoType[] = state.todos;
      const currentTodoId = newTodos1.findIndex((todo) => {
        const todo1: TodoType = {...todo}
        return todo1.id === action.payload;
      })
      if (currentTodoId !== -1) {
        newTodos1.splice(currentTodoId, 1);
        return { ...state, todos: newTodos1, openedTodo: {}};
      } else {
        return 
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

const KEY = "redux";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}