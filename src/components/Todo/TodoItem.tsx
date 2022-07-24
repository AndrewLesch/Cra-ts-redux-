import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { AppState, Todo } from '../../model';
import {
  deleteTodo,
  setSelectedTodoId,
  toggleCompletedTodo,
} from '../../redux/Actions';

import './Todo.css';

type TodoItemProps = {
  todo: Todo;
  selectedTodoId: string;
  toggleCompletedTodoAction(todoId: string): void;
  setSelectedTodoIdAction(selectedTodoId: string): void;
  deleteTodoAction(deleteId: string): void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  selectedTodoId,
  toggleCompletedTodoAction,
  setSelectedTodoIdAction: setSelectedTodoAction,
  deleteTodoAction,
}) => {
  const isTodoSelected = todo.id === selectedTodoId;
  return (
    <li
      onClick={() => setSelectedTodoAction(todo.id)}
      className={`${
        isTodoSelected ? 'selected todo-item' : 'unselected todo-item'
      }`}
    >
      <span
        className={`${
          todo.completed ? 'todo-item__completed' : 'todo-item__unfulfilled'
        }`}
      >
        <input
          className="todo-item--checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompletedTodoAction(todo.id)}
        />
        {todo.title} {'Date:'}
        {new Date(todo.date).toISOString().substring(0, 10)}
      </span>
      {isTodoSelected ? (
        <div>
          <button
            className="delete-button"
            onClick={() => deleteTodoAction(todo.id)}
          >
            {' '}
            Удалить
          </button>
          <hr></hr>
          <span>{todo.description}</span>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleCompletedTodoAction(todoId: string) {
    const actionPayload = toggleCompletedTodo(todoId);
    dispatch(actionPayload);
  },
  setSelectedTodoIdAction(selectedTodoId: string) {
    const actionPayload = setSelectedTodoId(selectedTodoId);
    dispatch(actionPayload);
  },
  deleteTodoAction(deleteTodoId: string) {
    const actionPayload = deleteTodo(deleteTodoId);
    dispatch(actionPayload);
  },
});

const mapStateToProps = ({todos}: AppState) => {
  return {
    selectedTodoId: todos.selectedTodoId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
