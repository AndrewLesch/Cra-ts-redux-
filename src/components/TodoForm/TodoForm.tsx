import React, { Dispatch, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { Todo } from '../../model';
import { createTodo } from '../../redux/Actions';
import { v4 } from 'uuid';

import './TodoForm.css';

export const currentDate: number = Date.parse(
  new Date().toISOString().split('T')[0]
);

const TodoForm: React.FC<any> = ({ createTodoAction }) => {
  const setEmptyTodo = () => {
    return {
      title: '',
      description: '',
      date: currentDate,
      completed: false,
      id: v4(),
      selected: false,
    };
  };
  const [todo, setTodo] = useState<Todo>(setEmptyTodo());

  const dateInputValue: string = new Date(todo.date)
    .toISOString()
    .substring(0, 10);

  const minDateValue = new Date(currentDate).toISOString().substring(0, 10);

  const setTodoInputValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setTodo({ ...todo, [name]: event.target.value });
    };

  const setTodoDateInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodo({ ...todo, date: Date.parse(event.target.value) });
  };

  const onSubmitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    createTodoAction(todo);
    setTodo(setEmptyTodo());
  };

  return (
    <form onSubmit={onSubmitForm} className="form">
      <div className="input-container">
        <p className="input-description">Title</p>
        <input
          required
          onChange={setTodoInputValue('title')}
          className="input-form"
          placeholder="Write title"
          value={todo.title}
        />
      </div>
      <div className="input-container">
        <p className="input-description">Description</p>
        <input
          onChange={setTodoInputValue('description')}
          className="input-form"
          placeholder="Write description"
          value={todo.description}
        />
      </div>
      <div className="input-container">
        <p className="input-description">Date</p>
        <input
          onChange={setTodoDateInputValue}
          type="date"
          className="input-form"
          value={dateInputValue}
          min={minDateValue}
        />
      </div>
      <button type="submit" className="button-form--submit">
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  createTodoAction: (todo: Todo) => {
    const actionPayload = createTodo(todo);
    dispatch(actionPayload);
  },
});

export default connect(null, mapDispatchToProps)(TodoForm);
