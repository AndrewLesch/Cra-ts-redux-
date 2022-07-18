import React from 'react';
import { connect } from 'react-redux';
import { Todo, AppState } from '../../model';
import TodoItem from './TodoItem';
import { sortAndFilterTodos } from '../../utils';
import { FilteredByDate, SortedBy, SortOrder } from '../../types';

import './Todo.css';

type TodoListProps = {
  todos: Todo[];
  filteredByDate: FilteredByDate;
  sortedBy: SortedBy;
  sortOrder: SortOrder;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  filteredByDate,
  sortedBy,
  sortOrder,
}) => {
  const sortedAndFilteredTodos: Todo[] = sortAndFilterTodos(
    todos,
    filteredByDate,
    sortedBy,
    sortOrder
  );

  return (
    <ul className="todo-list">
      {sortedAndFilteredTodos.map((todo: Todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos.todos,
    filteredByDate: state.todos.filteredByDate,
    sortedBy: state.todos.sortedBy,
    sortOrder: state.todos.sortOrder,
  };
};

export default connect(mapStateToProps)(TodoList);
