import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

export const TodoAdd = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    console.log(values);
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
