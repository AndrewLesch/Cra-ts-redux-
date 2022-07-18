import React, { ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { setFilteredBy, setSortedBy, setSortOrder } from '../../redux/Actions';
import TodoList from '../../components/Todo/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import { AppState } from '../../model';
import { FilteredByDate, SortedBy, SortOrder } from '../../types';

import './TodoMainPage.css';

type TodoMainPageProps = {
  filteredByDate: FilteredByDate;
  sortedBy: SortedBy;
  sortOrder: SortOrder;
  setIsFilteredAction: (filteredByDate: FilteredByDate) => void;
  setSortedByAction: (sortedBy: string) => void;
  setSortOrderAction: (sortOrder: string) => void;
};

const TodoMainPage: React.FC<TodoMainPageProps> = ({
  filteredByDate,
  sortedBy,
  sortOrder,
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
              filteredByDate === FilteredByDate.TODAY
                ? `active filter-button`
                : `default filter-button`
            }`}
            onClick={() => setIsFilteredAction(FilteredByDate.TODAY)}
          >
            Today
          </button>
          <button
            className={`${
              filteredByDate === FilteredByDate.ALL_TIME
                ? `active filter-button`
                : `default filter-button`
            }`}
            onClick={() => setIsFilteredAction(FilteredByDate.ALL_TIME)}
          >
            All
          </button>
        </div>

        <div className="sorting-selects--container">
          <span>Sort by </span>
          <select value={sortedBy} onChange={changeSortedValue}>
            <option value="Title">Title</option>
            <option value="Date">Date</option>
          </select>

          <select value={sortOrder} onChange={changeOrderValue}>
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
  setIsFilteredAction: (filteredByDate: FilteredByDate) => {
    const actionPayload = setFilteredBy(filteredByDate);
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

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todos.todos,
    filteredByDate: state.todos.filteredByDate,
    sortedBy: state.todos.sortedBy,
    sortOrder: state.todos.sortOrder,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMainPage);
