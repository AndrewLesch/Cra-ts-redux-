import { combineReducers } from 'redux';
import { todosReducer } from './TodosReducer';

export const rootReducer = combineReducers({ todos: todosReducer });
