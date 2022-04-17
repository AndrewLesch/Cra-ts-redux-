import React, { useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Form from '../../components/Form/Form';
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

  return (
    <Context.Provider value={{ toggleCompletedTodo }}>
      <div className="container">
        <Form onSubmit={onSubmit} />
        <TodoList todos={todos}></TodoList>
      </div>
    </Context.Provider>
  );
};

export default App;
