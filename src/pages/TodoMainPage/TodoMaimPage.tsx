import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { setIsFiltered, setSortedBy, setSortOrder } from '../../redux/Actions';
import { Link, Route, Routes } from 'react-router-dom';

import '../App/App.css';
import TodoItemPage from '../../components/Todo/TodoItemPage';

const TodoMainPage: React.FC<any> = ({
  setIsFilteredAction,
  setSortedByAction,
  setSortOrderAction,
  isFiltered,
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
          <h1 className="todos-h1">Todos</h1>
          <div className="filter-buttons--container">
            <button className={`${isFiltered === true ? `active filter-button` : `default filter-button`}`} onClick={() => setIsFilteredAction(true)}>Today</button>
            <button className={`${isFiltered === false ? `active filter-button` : `default filter-button`}`} onClick={() => setIsFilteredAction(false)}>All</button>
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
        <TodoList></TodoList>
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

const mapStateToProps = (state: any) => {
  return {
    Todos: state.todos.todos,
    isFiltered: state.todos.isFiltered,
    sortedBy: state.todos.sortedBy,
    sortOrder: state.todos.sortOrder,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMainPage);
