import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { setIsFiltered, setSortedBy, setSortOrder } from '../../redux/Actions';

import './App.css';

const App: React.FC<any> = ({
  setIsFilteredAction,
  setSortedByAction,
  setSortOrderAction,
}) => {
  const changeSortedValue = (event: any) => {
    setSortedByAction(event.target.value);
  };

  const changeOrderValue = (event: any) => {
    setSortOrderAction(event.target.value);
  };

  return (
    <div className="container">
      <TodoForm />
      <div className="functional-panel-container">
        <h1>Todos</h1>
        <div className="filter-buttons--container">
          <button onClick={() => setIsFilteredAction(true)}>Today</button>
          <button onClick={() => setIsFilteredAction(false)}>All</button>
        </div>

        <div className="sort-select--container">
          <span>Sort by </span>
          <select onChange={changeSortedValue}>
            <option value="Title">Title</option>
            <option value="Date">Date</option>
          </select>

          <select onChange={changeOrderValue}>
            <option value="Direct">Direct</option>
            <option value="Reverse">Reverse</option>
          </select>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setIsFilteredAction: (isFiltered: boolean) => {
    const actionPayload = setIsFiltered(isFiltered);
    dispatch(actionPayload);
  },
  setSortedByAction: (sortedBy: string) => {
    const actionPayload = setSortedBy(sortedBy);
    dispatch(actionPayload);
  },
  setSortOrderAction: (sortOrder: string) => {
    const actionPayload = setSortOrder(sortOrder);
    dispatch(actionPayload);
  },
});
export default connect(null, mapDispatchToProps)(App);
