import { connect } from 'react-redux';
import React from 'react';
import { TodoType } from '../../model';
import './Todo.css';
import { setOpenedTodo, toggleCompletedTodo } from '../../redux/Actions';
import { Link } from 'react-router-dom';
import TodoItemPage from './TodoItemPage';

type TodoItemType = {
  todo: TodoType;
  toggleCompletedTodoAction(a: any): any;
  setOpenedTodoAction(a: any): any;
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
        <Link onClick={() => setOpenedTodoAction(todo)} target='_blank' to='todo-item'>
          {todo.title} {todo.date}
        </Link>
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCompletedTodoAction: (todoId: any) => {
    const actionPayload = toggleCompletedTodo(todoId);
    dispatch(actionPayload);
  },
  setOpenedTodoAction: (openedTodo: any) => {
    console.log(openedTodo)
    const actionPayload = setOpenedTodo(openedTodo);
    dispatch(actionPayload);
  }
});

export default connect(null, mapDispatchToProps)(TodoItem);
