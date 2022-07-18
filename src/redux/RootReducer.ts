import { combineReducers, Reducer } from 'redux';
import { TodosReducer } from './TodosReducer';

export const rootReducer: Reducer = combineReducers({ todos: TodosReducer });
