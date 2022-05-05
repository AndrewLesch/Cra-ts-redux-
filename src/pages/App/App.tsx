import React, { useEffect, useState } from 'react';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { AppContextType, TodoType } from '../../model';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <TodoForm />
      <div className="functional-panel-container">
        <h1>Todos</h1>
        <div className="filter-buttons--container">
          <button>Today</button>
          <button>All</button>
        </div>

        <div className="sort-select--container">
          <span>Sort by </span>
          <select>
            <option value="Title">Title</option>
            <option value="Date">Date</option>
          </select>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
