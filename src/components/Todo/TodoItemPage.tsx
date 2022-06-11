import { connect } from 'react-redux';
import React from 'react';
import { TodoType } from '../../model';
import './Todo.css';
import { deleteTodo, toggleCompletedTodo } from '../../redux/Actions';
import { Link } from 'react-router-dom';

type TodoItemPageType = {
  openedTodo: TodoType,
  Todos: TodoType[],
  deleteTodoAction(a: any): any,
};

const TodoItemPage: React.FC<TodoItemPageType> = ({
  openedTodo,
  Todos,
  deleteTodoAction,
}) => {
  return (
   <div>
      <li className="todo-item">
      {openedTodo.title} {openedTodo.description}
    </li>
    <button onClick={() => deleteTodoAction(openedTodo.id)}>
      Удалить todo
    </button>
   </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleCompletedTodoAction: (todoId: any) => {
    const actionPayload = toggleCompletedTodo(todoId);
    dispatch(actionPayload);
  },
  deleteTodoAction: (id: string) => {
    console.log(id)
    const actionPayload = deleteTodo(id);
    dispatch(actionPayload);
  }
});

const mapStateToProps = (state: any) => {
  return {
    Todos: state.todos.todos,
    isFiltered: state.todos.isFiltered,
    sortedBy: state.todos.sortedBy,
    sortOrder: state.todos.sortOrder,
    openedTodo: state.todos.openedTodo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemPage);
