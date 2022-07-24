import { Todo } from '../model';

type TodoUtilsType = {
  deleteTodoById(todos: Todo[], deleteTodoId: string): Todo[];
  toggleTodo(todos: Todo[], complitedTodoId: string): Todo[];
};

export const TodoUtils: TodoUtilsType = {
  deleteTodoById(todos, deleteTodoId) {
    return todos.filter(({ id }) => id !== deleteTodoId);
  },

  toggleTodo(todos, complitedTodoId) {
    const newTodos = todos.map((todo) => {
      const todoCopy: Todo = { ...todo };
      if (todoCopy.id === complitedTodoId) {
        todoCopy.completed = !todoCopy.completed;
      }

      return todoCopy;
    });
    return newTodos;
  },
};
