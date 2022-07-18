import { Todo } from '../model';
import { FilteredByDate } from '../types';
import {
  CREATE_TODO,
  SET_FILTERED_BY_DATE,
  TOGGLE_TODO,
  SET_SORTED_BY,
  SET_SORT_ORDER,
  DELETE_TODO,
  SET_SELECTED_TODO_ID,
} from './ReduxConstants';
import {
  ActionCreateTodo,
  ActionDeleteTodo,
  ActionSetFilteredByDate,
  ActionSetSelectedTodoId,
  ActionSetSortedBy,
  ActionSetSortOrder,
  ActionToggleTodo,
} from './ReduxTypes';

export function createTodo(todo: Todo): ActionCreateTodo {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}

export function toggleCompletedTodo(id: string): ActionToggleTodo {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function setFilteredBy(
  filteredByDate: FilteredByDate
): ActionSetFilteredByDate {
  return {
    type: SET_FILTERED_BY_DATE,
    payload: filteredByDate,
  };
}

export function setSortedBy(sortedBy: string): ActionSetSortedBy {
  return {
    type: SET_SORTED_BY,
    payload: sortedBy,
  };
}

export function setSortOrder(sortOrder: string): ActionSetSortOrder {
  return {
    type: SET_SORT_ORDER,
    payload: sortOrder,
  };
}

export function deleteTodo(id: string): ActionDeleteTodo {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function setSelectedTodoId(
  selectedTodoId: string
): ActionSetSelectedTodoId {
  return {
    type: SET_SELECTED_TODO_ID,
    payload: selectedTodoId,
  };
}
