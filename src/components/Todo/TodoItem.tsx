import React, { useContext } from 'react';
import { AppContextType, TodoType } from '../../model';
import { Context } from '../../pages/App/App';

import './Todo.css';

type TodoItemType = {
  todo: TodoType;
};

const TodoItem: React.FC<TodoItemType> = ({ todo }) => {
  const { toggleCompletedTodo } = useContext<AppContextType>(Context);

  return (
    <li className="todo-item">
      <span className={`${todo.completed === true ? 'todo--completed' : ''}`}>
        <input
          className="input-todo--item"
          type="checkbox"
          onChange={() => toggleCompletedTodo(todo.id)}
        />
        {todo.title}, {todo.date}
      </span>
    </li>
  );
};

export default TodoItem;
