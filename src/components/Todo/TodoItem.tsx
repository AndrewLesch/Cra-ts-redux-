import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { TodoType } from '../../model';
import { setOpenedTodo, toggleCompletedTodo } from '../../redux/Actions';
import { Link } from 'react-router-dom';

import './Todo.css';

type TodoItemType = {
  todo: TodoType;
  toggleCompletedTodoAction(todoID: string): void;
  setOpenedTodoAction(openedTodo: TodoType): void;
};

const TodoItem: React.FC<TodoItemType> = ({
  todo,
  toggleCompletedTodoAction,
  setOpenedTodoAction,
}) => {
  return (
    <li className="todo-item">
      <span className={`${todo.completed === true ? 'todo--completed' : ''}`}>
        <input
          className="input-todo--item"
          type="checkbox"
          onChange={() => toggleCompletedTodoAction(todo.id)}
        />
        <Link
          onClick={() => setOpenedTodoAction(todo)}
          target="_blank"
          to="todo-item"
        >
          {todo.title} {todo.date}
        </Link>
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleCompletedTodoAction: (todoId: string) => {
    const actionPayload = toggleCompletedTodo(todoId);
    dispatch(actionPayload);
  },
  setOpenedTodoAction: (openedTodo: TodoType) => {
    const actionPayload = setOpenedTodo(openedTodo);
    dispatch(actionPayload);
  },
});

export default connect(null, mapDispatchToProps)(TodoItem);
