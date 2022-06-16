import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoItemPage from '../TodoItemPage/TodoItemPage';
import TodoMaimPage from '../TodoMainPage/TodoMainPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoMaimPage />}></Route>
      <Route path="todo-item" element={<TodoItemPage />}></Route>
    </Routes>
  );
};

export default App;
