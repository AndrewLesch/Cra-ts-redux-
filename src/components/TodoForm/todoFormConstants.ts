import { v4 } from 'uuid';
import { TodoType } from '../../model';

export const currentDate: string = new Date().toISOString().split('T')[0];
export const epmtyTodo: TodoType = {
  title: '',
  description: '',
  date: currentDate,
  completed: false,
  id: v4(),
};
