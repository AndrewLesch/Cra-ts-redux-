import { FilteredByDate, SortedBy, SortOrder } from './types';

export type Todo = {
  id: string;
  title: string;
  description: string;
  date: number;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
  filteredByDate: FilteredByDate;
  sortedBy: SortedBy;
  sortOrder: SortOrder;
  selectedTodoId: string;
};

export type AppState = {
  todos: TodoState;
  _persist: {
    rehidrated: boolean;
    version: number;
  };
};
