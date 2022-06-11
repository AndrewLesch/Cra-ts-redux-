import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { setIsFiltered, setSortedBy, setSortOrder } from '../../redux/Actions';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import TodoItemPage from '../../components/Todo/TodoItemPage';
import TodoMaimPage from '../TodoMainPage/TodoMaimPage';

const App: React.FC<any> = ({
  
}) => {
 
  return (
        <Routes>
          <Route path='/' element={<TodoMaimPage /> }></Route>
          <Route path='todo-item' element={<TodoItemPage />}></Route>
        </Routes>
  );
};



export default App;
