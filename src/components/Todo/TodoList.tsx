import React from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../../model';
import TodoItem from './TodoItem';
import { currentDate } from '../TodoForm/todoFormConstants';

import './Todo.css';

const TodoList: React.FC<any> = ({
  Todos,
  isFiltered,
  sortedBy,
  sortOrder,
}) => {
  let filteredTodos: TodoType[] = [];
  let sortedAndFilteredTodos: TodoType[] = [];

  if (isFiltered) {
    filteredTodos = Todos.filter((todo: TodoType) => {
      if (todo.date === currentDate) {
        return todo;
      }
    });
  } else {
    filteredTodos = Todos;
  }

  if (sortedBy === 'Title') {
    if (sortOrder === 'Direct') {
      sortedAndFilteredTodos = filteredTodos.sort((firstTodo, secondTodo) => {
        if (firstTodo.title > secondTodo.title) return 1;
        if (firstTodo.title < secondTodo.title) return -1;

        return 1 | -1;
      });
    } else {
      sortedAndFilteredTodos = filteredTodos.sort((firstTodo, secondTodo) => {
        if (firstTodo.title > secondTodo.title) return -1;
        if (firstTodo.title < secondTodo.title) return 1;

        return 1 | -1;
      });
    }
  } else {
    if (sortOrder === 'Direct') {
      sortedAndFilteredTodos = filteredTodos.sort((firtsTodo, secondTodo) => {
        if (new Date(firtsTodo.date) > new Date(secondTodo.date)) return 1;
        if (new Date(firtsTodo.date) < new Date(secondTodo.date)) return -1;

        return 1 | -1;
      });
    } else {
      sortedAndFilteredTodos = filteredTodos.sort((firtsTodo, secondTodo) => {
        if (new Date(firtsTodo.date) > new Date(secondTodo.date)) return -1;
        if (new Date(firtsTodo.date) < new Date(secondTodo.date)) return 1;

        return 1 | -1;
      });
    }
  }

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
