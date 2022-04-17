import React from 'react';
import { TodoType } from '../../model';
import TodoItem from './TodoItem';

import './Todo.css';

type TodoListType = {
  todos: TodoType[];
};

const TodoList: React.FC<TodoListType> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, id) => (
        <TodoItem key={id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
