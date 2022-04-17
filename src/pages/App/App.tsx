import React, { useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import Form from '../../components/Form/Form';
import { TodoType } from '../../model';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onSubmit = (todoFromForm: TodoType): void => {
    const nextTodos: TodoType[] = [...todos, todoFromForm];
    setTodos(nextTodos);
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export default App;
