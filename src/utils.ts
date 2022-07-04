import { currentDate } from './components/TodoForm/todoFormConstants';
import { TodoType } from './model';

export const SortAndFilterTodo = (
  isFiltered: boolean,
  sortedBy: string,
  sortOrder: string,
  Todos: TodoType[]
): TodoType[] => {
  let filteredTodos: TodoType[] = [];
  let sortedAndFilteredTodos: TodoType[] = [];

  if (isFiltered) {
    filteredTodos = Todos.filter((todo: TodoType) => {
      if (todo.date === currentDate) {
        return todo;
      }
    });
  } else {
    filteredTodos = Todos;
  }
  console.log(filteredTodos);
  if (sortedBy === 'Title') {
    if (sortOrder === 'Direct') {
      sortedAndFilteredTodos = filteredTodos.sort((firstTodo, secondTodo) => {
        if (firstTodo.title > secondTodo.title) return 1;
        if (firstTodo.title < secondTodo.title) return -1;

        return 1 | -1;
      });
    } else {
      sortedAndFilteredTodos = filteredTodos.sort((firstTodo, secondTodo) => {
        if (firstTodo.title > secondTodo.title) return -1;
        if (firstTodo.title < secondTodo.title) return 1;

        return 1 | -1;
      });
    }
  } else {
    if (sortOrder === 'Direct') {
      sortedAndFilteredTodos = filteredTodos.sort((firtsTodo, secondTodo) => {
        if (new Date(firtsTodo.date) > new Date(secondTodo.date)) return 1;
        if (new Date(firtsTodo.date) < new Date(secondTodo.date)) return -1;

        return 1 | -1;
      });
    } else {
      sortedAndFilteredTodos = filteredTodos.sort((firtsTodo, secondTodo) => {
        if (new Date(firtsTodo.date) > new Date(secondTodo.date)) return -1;
        if (new Date(firtsTodo.date) < new Date(secondTodo.date)) return 1;

        return 1 | -1;
      });
    }
  }
  console.log(sortedAndFilteredTodos);
  return sortedAndFilteredTodos;
};
