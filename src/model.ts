export type TodoType = {
  title: string;
  description: string;
  date: string;
  completed: boolean;
  id: string;
};

export type AppContextType = {
  toggleCompletedTodo(id: string): void;
};
