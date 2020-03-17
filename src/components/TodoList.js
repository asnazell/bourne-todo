import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { completeTodo } from "../redux/actions";
import "./TodoList.scss";

const TodoItems = ({ todos }) => {
  return (
    <React.Fragment>
      <div className="todo-header">
        <div className="todo-task">Task</div>
        <div className="todo-done">Done?</div>
      </div>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </React.Fragment>
  );
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckDone = () => {
    const action = completeTodo(todo.id);
    setTimeout(() => dispatch(action), 300);
  };

  return (
    <div className="todo-item">
      <div className="todo-task">{todo.task}</div>
      <div className="todo-done">
        <Checkbox color="primary" onChange={handleCheckDone} />
      </div>
    </div>
  );
};

export const TodoList = () => {
  const todos = useSelector(state => state.todos);

  console.log("todos", todos);

  return (
    <section className="todo-list">
      {todos.length ? (
        <TodoItems todos={todos} />
      ) : (
        <div>Nothing to do. Sweet as!</div>
      )}
    </section>
  );
};
