import React from "react";
import { TodoType } from "../../model";
import TodoItem from "./TodoItem";

type TodoListType = {
  todos: TodoType[],
}

const TodoList: React.FC<TodoListType> = ({todos}) => {

  return (
    <ul>
      {todos.map((todo, id) => {
        return <TodoItem key={id} todo={todo}/>
      })}
    </ul>
  )
}

export default TodoList;