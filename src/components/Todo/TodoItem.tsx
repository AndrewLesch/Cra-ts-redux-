import { connect } from 'react-redux';
import React, { useContext } from 'react';
import { AppContextType, TodoType } from '../../model';
import './Todo.css';
import { toggleCompletedTodo } from '../../redux/Actions';

type TodoItemType = {
  todo: TodoType;
  toggleCompletedTodoAction(a: any): any;
};

const TodoItem: React.FC<TodoItemType> = ({
  todo,
  toggleCompletedTodoAction,
}) => {
  console.log(todo);
  return (
    <li className="todo-item">
      <span className={`${todo.completed === true ? 'todo--completed' : ''}`}>
        <input
          className="input-todo--item"
          type="checkbox"
          onChange={() => toggleCompletedTodoAction(todo.id)}
        />
        {todo.title}, {todo.date}
      </span>
    </li>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCompletedTodoAction: (todoId: any) => {
    const actionPayload = toggleCompletedTodo(todoId);
    dispatch(actionPayload);
  },
});

export default connect(null, mapDispatchToProps)(TodoItem);
