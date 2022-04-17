import React, { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { AppContextType, TodoType } from '../../model';

import './App.css';

export const Context = React.createContext<AppContextType>(
  {} as AppContextType
);

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onSubmit = (todoFromForm: TodoType): void => {
    const nextTodos: TodoType[] = [...todos, todoFromForm];
    setTodos(nextTodos);
  };

  const toggleCompletedTodo = (id: string): void => {
    const newTodos: TodoType[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const setFiltredTodos = () => {
    const todos1 = [...todos];
    // сохранить в редакс
    const filteredTodosByToday = todos1.filter((todo) => {
      return todo.date === new Date().toISOString().split('T')[0];
    });

    setTodos(filteredTodosByToday);
  };

  const setAllTodos = () => {
    setTodos(todos);
  };

  const sortTodos = (event: any) => {
    if (event.target.value === 'Title') {
      const todos1 = [...todos];
      const newTodos = todos1.sort((todo1, todo2) => {
        if (todo1.title > todo2.title) return 1;
        if (todo1.title < todo2.title) return -1;

        return 1 | -1;
      });

      setTodos(newTodos);
    } else {
      const todos1 = [...todos];
      const newTodos = todos1.sort((todo1, todo2) => {
        if (new Date(todo1.date) > new Date(todo2.date)) return 1;
        if (new Date(todo1.date) < new Date(todo2.date)) return -1;

        return 1 | -1;
      });

      setTodos(newTodos);
    }
  };

  return (
    <Context.Provider value={{ toggleCompletedTodo }}>
      <div className="container">
        <TodoForm />
        <div className="functional-panel-container">
          <h1>Todos</h1>
          <div className="filter-buttons--container">
            <button onClick={setFiltredTodos}>Today</button>
            <button onClick={setAllTodos}>All</button>
          </div>

          <div className="sort-select--container">
            <span>Sort by </span>
            <select onChange={sortTodos}>
              <option value="Title">Title</option>
              <option value="Date">Date</option>
            </select>
          </div>
        </div>
        <TodoList />
      </div>
    </Context.Provider>
  );
};

export default App;
