import React from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../../model';
import TodoItem from './TodoItem';

import './Todo.css';
import { SortAndFilterTodo } from '../../utils';

const TodoList: React.FC<any> = ({
  Todos,
  isFiltered,
  sortedBy,
  sortOrder,
}) => {
  let sortedAndFilteredTodos: TodoType[] = [
    ...SortAndFilterTodo(isFiltered, sortedBy, sortOrder, Todos),
  ];

  return (
    <ul className="todo-list">
      {sortedAndFilteredTodos.map((todo: TodoType) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state: any) => {
  return {
    Todos: state.todos.todos,
    isFiltered: state.todos.isFiltered,
    sortedBy: state.todos.sortedBy,
    sortOrder: state.todos.sortOrder,
  };
};

export default connect(mapStateToProps, null)(TodoList);
