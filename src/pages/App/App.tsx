import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoMainPage from '../TodoMainPage/TodoMainPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoMainPage />}></Route>
    </Routes>
  );
};

export default App;
