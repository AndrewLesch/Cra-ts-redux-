import { AnyAction } from 'redux';
import {
  CREATE_TODO,
  SET_FILTERED_BY_DATE,
  TOGGLE_TODO,
  SET_SORTED_BY,
  SET_SORT_ORDER,
  DELETE_TODO,
  SET_SELECTED_TODO_ID,
} from './ReduxConstants';
import { TodoState, Todo } from '../model';
import { FilteredByDate, SortedBy, SortOrder } from '../types';
import { actionsWithTodo } from './ReduxUtils';
import {
  ActionCreateTodo,
  ActionDeleteTodo,
  ActionSetFilteredByDate,
  ActionSetSelectedTodoId,
  ActionSetSortedBy,
  ActionSetSortOrder,
  ActionToggleTodo,
} from './ReduxTypes';

export const initialState: TodoState = {
  todos: [],
  filteredByDate: FilteredByDate.TODAY,
  sortedBy: SortedBy.TITLE,
  sortOrder: SortOrder.DIRECT,
  selectedTodoId: '',
};

export const TodosReducer = (
  state = initialState,
  action:
    | ActionCreateTodo
    | ActionSetFilteredByDate
    | ActionSetSortedBy
    | ActionSetSortOrder
    | ActionDeleteTodo
    | ActionToggleTodo
    | ActionSetSelectedTodoId
    | AnyAction
) => {
  switch (action.type) {
    case SET_FILTERED_BY_DATE: {
      const { payload } = action as ActionSetFilteredByDate;
      return { ...state, filteredByDate: payload };
    }
    case SET_SORTED_BY: {
      const { payload } = action as ActionSetSortedBy;
      return { ...state, sortedBy: payload };
    }
    case SET_SORT_ORDER: {
      const { payload } = action as ActionSetSortOrder;
      return { ...state, sortOrder: payload };
    }
    case CREATE_TODO: {
      const { payload } = action as ActionCreateTodo;
      return { ...state, todos: [...state.todos, payload] };
    }
    case DELETE_TODO: {
      const { payload } = action as ActionDeleteTodo;
      const newTodos: Todo[] = [
        ...actionsWithTodo.deleteTodo(state.todos, payload),
      ];
      return { ...state, todos: newTodos, selectedTodo: null };
    }
    case TOGGLE_TODO: {
      const { payload } = action as ActionToggleTodo;
      const newTodos: Todo[] = [
        ...actionsWithTodo.toggleTodo(state.todos, payload),
      ];
      return { ...state, todos: newTodos };
    }
    case SET_SELECTED_TODO_ID: {
      const { payload } = action as ActionSetSelectedTodoId;
      return { ...state, selectedTodoId: payload };
    }
    default:
      return state;
  }
};
