import { Todo } from '../model';
import { FilteredByDate } from '../types';

export type ActionSetFilteredByDate = {
  type: string;
  payload: FilteredByDate;
};

export type ActionSetSortedBy = {
  type: string;
  payload: string;
};

export type ActionSetSortOrder = {
  type: string;
  payload: string;
};

export type ActionCreateTodo = {
  type: string;
  payload: Todo;
};

export type ActionOpenedTodo = {
  type: string;
  payload: Todo;
};

export type ActionDeleteTodo = {
  type: string;
  payload: string;
};

export type ActionToggleTodo = {
  type: string;
  payload: string;
};

export type ActionSetSelectedTodoId = {
  type: string;
  payload: string;
};
