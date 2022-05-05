import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { TodoType } from '../../model';
import { createTodo } from '../../redux/Actions';
import { currentDate } from './todoFormConstants';

import './TodoForm.css';

const TodoForm: React.FC<any> = ({ createTodoAction }) => {
  const [todo, setTodo] = useState<TodoType>({
    title: '',
    description: '',
    date: currentDate,
    completed: false,
    id: v4(),
  });

  const setTodoInputValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setTodo({ ...todo, [name]: event.target.value });
    };

  const onSubmitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    createTodoAction(todo);
    setTodo({
      title: '',
      description: '',
      date: currentDate,
      completed: false,
      id: v4(),
    });
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
          max={currentDate}
        />
      </div>
      <button
        type="submit"
        onClick={onSubmitForm}
        className="button-form--submit"
      >
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  createTodoAction: (todo: any) => {
    const actionPayload = createTodo(todo);
    dispatch(actionPayload);
  },
});

export default connect(null, mapDispatchToProps)(TodoForm);
