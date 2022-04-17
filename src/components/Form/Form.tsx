import React, { useState } from 'react';
import { TodoType } from '../../model';
import { emptyTodo } from './formConstants';

import './Form.css';

type FormType = {
  onSubmit(todo: TodoType): void;
};

const Form: React.FC<FormType> = ({ onSubmit }) => {
  const [todo, setTodo] = useState(emptyTodo);

  const setTodoInputValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setTodo({ ...todo, [name]: event.target.value });
    };

  const onSubmitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    onSubmit(todo);
    setTodo(emptyTodo);
  };

  return (
    <form className="form">
      <div className="input-container">
        <p className="input-description">Title</p>
        <input
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
          onChange={setTodoInputValue('date')}
          type="date"
          className="input-form"
          value={todo.date}
        />
      </div>
      <button onClick={onSubmitForm} className="button-form--submit">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
