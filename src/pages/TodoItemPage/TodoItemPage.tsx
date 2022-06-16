import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { TodoType } from '../../model';
import { deleteTodo, toggleCompletedTodo } from '../../redux/Actions';

type TodoItemPageType = {
  openedTodo: TodoType;
  deleteTodoAction(id: string): void;
};

const TodoItemPage: React.FC<TodoItemPageType> = ({
  openedTodo,
  deleteTodoAction,
}) => {
  return (
    <>
      {openedTodo.title !== undefined ? (
        <div>
          <p>
            {openedTodo.title} {openedTodo.description}
          </p>
          <button onClick={() => deleteTodoAction(openedTodo.id)}>
            Удалить todo
          </button>
        </div>
      ) : (
        <p>Todo удален.</p>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleCompletedTodoAction: (todoId: string) => {
    const actionPayload = toggleCompletedTodo(todoId);
    dispatch(actionPayload);
  },
  deleteTodoAction: (id: string) => {
    const actionPayload = deleteTodo(id);
    dispatch(actionPayload);
  },
});

const mapStateToProps = (state: any) => {
  return {
    openedTodo: state.todos.openedTodo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemPage);
