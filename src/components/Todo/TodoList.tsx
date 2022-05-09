import React from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../../model';
import TodoItem from './TodoItem';

import './Todo.css';
import { currentDate } from '../TodoForm/todoFormConstants';

const TodoList: React.FC<any> = ({ Todos, isFiltered }) => {
  let filteredTodos: TodoType[] = [];

  if (isFiltered) {
    filteredTodos = Todos.filter((todo: TodoType) => {
      if (todo.date === currentDate) {
        return todo;
      }
    });
  } else {
    filteredTodos = Todos;
  }

  console.log(isFiltered);

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    Todos: state.todos.todos,
    isFiltered: state.todos.isFiltered,
  };
};

export default connect(mapStateToProps, null)(TodoList);
