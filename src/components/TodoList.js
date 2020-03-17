import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { MdAdd, MdClear } from "react-icons/md";
import { completeTodo } from "../redux/actions";
import { TodoAdd } from "./TodoAdd";
import "./TodoList.scss";

const TodoItems = ({ todos }) => {
  return (
    <React.Fragment>
      <div className="todo-header">
        <div className="todo-task">Task</div>
        <div className="todo-add">Add Subtask</div>
        <div className="todo-max">Max</div>
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
  const [showAddSubtask, setShowAddSubtask] = useState(false);

  const handleChangeCheckbox = () => {
    const action = completeTodo(todo.id);
    setTimeout(() => dispatch(action), 300);
  };

  const handleClickAdd = () => {
    setShowAddSubtask(!showAddSubtask);
  };

  return (
    <React.Fragment>
      <div className="todo-item">
        <div className="todo-task">{todo.task}</div>
        <div className="todo-add">
          <button
            type="button"
            className="btn-add-subtask"
            onClick={handleClickAdd}
          >
            {showAddSubtask ? (
              <MdClear size={20} color="#555" />
            ) : (
              <MdAdd size={20} color="#555" />
            )}
          </button>
        </div>
        <div className="todo-max">{todo.maxChildren}</div>
        <div className="todo-done">
          <Checkbox color="primary" onChange={handleChangeCheckbox} />
        </div>
      </div>
      {showAddSubtask && (
        <AddSubtask parentId={todo.id} setShowAddSubtask={setShowAddSubtask} />
      )}
    </React.Fragment>
  );
};

const AddSubtask = ({ parentId, setShowAddSubtask }) => {
  return (
    <div className="todo-item">
      <TodoAdd parentId={parentId} setShowAddSubtask={setShowAddSubtask} />
    </div>
  );
};

export const TodoList = () => {
  const todos = useSelector(state => state.todos);

  console.log("todos", todos);

  return todos.length ? (
    <TodoItems todos={todos} />
  ) : (
    <div>Nothing to do. Sweet as!</div>
  );
};
