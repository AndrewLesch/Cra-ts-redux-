import { TodoType } from '../model';
import { CREATE_TODO, SET_IS_FILTERED, TOGGLE_TODO, SET_SORTED_BY } from './Types';

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
  }
}