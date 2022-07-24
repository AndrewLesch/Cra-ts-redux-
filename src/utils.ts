import { currentDate } from './components/TodoForm/TodoForm';
import { Todo } from './model';
import { FilteredByDate, SortedBy, SortOrder } from './types';

export const sortAndFilterTodos = (
  todos: Todo[],
  filteredByDate: FilteredByDate,
  sortedBy: SortedBy,
  sortOrder: SortOrder
): Todo[] => {
  todos = [...todos];

  if (filteredByDate === FilteredByDate.TODAY) {
    todos = todos.filter((todo: Todo) => todo.date === currentDate);
  }

  switch (sortedBy) {
    case SortedBy.TITLE: {
      todos = todos.sort((firstTodo, secondTodo) =>
        sortOrder === SortOrder.ASC
          ? firstTodo.title.localeCompare(secondTodo.title)
          : secondTodo.title.localeCompare(firstTodo.title)
      );

      return todos;
    }

    case SortedBy.DATE: {
      todos = todos.sort((firstTodo, secondTodo) =>
        sortOrder === SortOrder.ASC
          ? firstTodo.date - secondTodo.date
          : secondTodo.date - firstTodo.date
      );

      return todos;
    }

    default: {
      return todos;
    }
  }
};
