import { Todo } from '../model';

type actionsWithTodoType = {
  deleteTodo(todos: Todo[], payload: string): Todo[];
  toggleTodo(todos: Todo[], payload: string): Todo[];
};

export const actionsWithTodo: actionsWithTodoType = {
  deleteTodo(todos, payload) {
    const deletedTodoId = todos.findIndex((todo) => {
      const copiedTodo: Todo = { ...todo };
      return copiedTodo.id === payload;
    });

    todos.splice(deletedTodoId, 1);
    return todos;
  },

  toggleTodo(todos, payload) {
    const newTodos = todos.map((todo) => {
      const todoCopy: Todo = { ...todo };
      if (todoCopy.id === payload) {
        todoCopy.completed = !todoCopy.completed;
      }

      return todoCopy;
    });
    return newTodos;
  },
};
