import { CREATE_TODO } from "./Types"

export function createTodo (todo: any) {
  console.log(todo)
  return {
    type: CREATE_TODO,
    payload: todo,
  }
}   