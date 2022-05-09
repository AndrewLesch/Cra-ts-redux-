import { combineReducers, Reducer } from 'redux';
import { todosReducer } from './TodosReducer';

export const rootReducer: Reducer = combineReducers({ todos: todosReducer });
