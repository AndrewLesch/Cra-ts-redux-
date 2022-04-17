import React from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../../model';
import TodoItem from './TodoItem';

import './Todo.css';


const TodoList: React.FC<any> = ({ Todos }) => {
  console.log(Todos)
  return (
    <ul className="todo-list">
      {Todos}
    </ul>
  );
};

const mapStateToProps: any = (state: any) => {
  console.log(state, state.todos, state.todos.todos)
  
  return {
    Todos: state.todos.todos
  }
}

export default connect(mapStateToProps, null) (TodoList);
