import React, { ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { setIsFiltered, setSortedBy, setSortOrder } from '../../redux/Actions';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';

import './TodoMainPage.css';

type TodoMainPageType = {
  isFiltered: boolean;
  setIsFilteredAction(isFiltered: boolean): void;
  setSortedByAction(sortedBy: string): void;
  setSortOrderAction(sortOrder: string): void;
};

const TodoMainPage: React.FC<TodoMainPageType> = ({
  isFiltered,
  setIsFilteredAction,
  setSortedByAction,
  setSortOrderAction,
}) => {
  const changeSortedValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortedByAction(event.target.value);
  };

  const changeOrderValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrderAction(event.target.value);
  };

  return (
    <div className="wrapper">
      <TodoForm />
      <div className="functional-panel--container">
        <h1 className="todos-title">Todos</h1>
        <div className="filter-buttons--container">
          <button
            className={`${
              isFiltered === true
                ? `active filter-button`
                : `default filter-button`
            }`}
            onClick={() => setIsFilteredAction(true)}
          >
            Today
          </button>
          <button
            className={`${
              isFiltered === false
                ? `active filter-button`
                : `default filter-button`
            }`}
            onClick={() => setIsFilteredAction(false)}
          >
            All
          </button>
        </div>

        <div className="sorting-selects--container">
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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
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
