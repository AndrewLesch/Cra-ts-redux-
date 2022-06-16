export type TodoType = {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  id: string;
};

export type StateType = {
  todos: TodoType[];
  isFiltered: boolean;
  sortedBy: string;
  sortOrder: string;
  openedTodo: TodoType;
};
