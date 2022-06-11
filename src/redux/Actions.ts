import { TodoType } from '../model';
import {
  CREATE_TODO,
  SET_IS_FILTERED,
  TOGGLE_TODO,
  SET_SORTED_BY,
  SET_SORT_ORDER,
  SET_OPENED_TODO,
  DELETE_TODO,
} from './Types';

export function createTodo(todo: TodoType) {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}

export function toggleCompletedTodo(id: string) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function setIsFiltered(isFiltered: boolean) {
  return {
    type: SET_IS_FILTERED,
    payload: isFiltered,
  };
}

export function setSortedBy(sortedBy: string) {
  return {
    type: SET_SORTED_BY,
    payload: sortedBy,
  };
}

export function setSortOrder(sortOrder: string) {
  return {
    type: SET_SORT_ORDER,
    payload: sortOrder,
  };
}

export function setOpenedTodo(openedTodo: TodoType) {
  return {
    type: SET_OPENED_TODO,
    payload: openedTodo,
  }
}

export function deleteTodo(id: string) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}