import React from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { addTodo } from "../redux/actions";

export const TodoAdd = () => {
  const { handleSubmit, register, reset, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = formData => {
    const action = addTodo(formData);
    dispatch(action);
    reset();
  };

  return (
    <section className="todo-add">
      <form
        className="form-task-add"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="textfield">
          <TextField
            name="task"
            label="New Task"
            placeholder="What needs to get done?"
            variant="outlined"
            autoFocus
            fullWidth
            error={!!errors.task}
            helperText={errors.task && errors.task.message}
            inputRef={register({
              required: "Please enter a description of your task"
            })}
          />
        </div>
        <Button type="submit" variant="outlined" color="primary">
          Add
        </Button>
      </form>
    </section>
  );
};
