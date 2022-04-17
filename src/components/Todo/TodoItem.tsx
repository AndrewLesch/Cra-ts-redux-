import React from 'react';
import { TodoType } from '../../model';

type TodoItemType = {
  todo: TodoType;
};

const TodoItem: React.FC<TodoItemType> = ({ todo }) => {
  return (
    <li>
      {todo.title}, {todo.date}
    </li>
  );
};

export default TodoItem;
