import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../../model';
import { v4 } from 'uuid';
import { createTodo } from '../../redux/Actions';

import './TodoForm.css';


const TodoForm: React.FC<any> = () => {
  const [todo, setTodo] = useState<TodoType>({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
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
    console.log(todo)
    console.log(createTodo)
    createTodo(todo);
    setTodo({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
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
        />
      </div>
      <button type="submit" onClick={onSubmitForm} className="button-form--submit">
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createTodo,
}

export default connect(null, mapDispatchToProps) (TodoForm);
