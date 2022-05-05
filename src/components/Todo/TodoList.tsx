import React from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../../model';
import TodoItem from './TodoItem';

import './Todo.css';

const TodoList: React.FC<any> = ({ Todos }) => {
  console.log(Todos);
  return (
    <ul className="todo-list">
      {Todos.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    Todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, null)(TodoList);
