import { TodoType } from '../model';
import { CREATE_TODO, TOGGLE_TODO } from './Types';

export function createTodo(todo: any) {
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
