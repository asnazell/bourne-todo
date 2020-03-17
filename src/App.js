import React from "react";
import { Button, TextField } from "@material-ui/core";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1>Bourne Todo Application</h1>
      <section className="todo-add">
        <form className="form-task-add" noValidate autoComplete="off">
          <div className="textfield">
            <TextField
              label="New Task"
              placeholder="What needs to get done?"
              variant="outlined"
              fullWidth
            />
          </div>
          <Button variant="outlined" color="primary">
            Add
          </Button>
        </form>
      </section>
      <section className="todo-list">Todo List</section>
    </div>
  );
};

export default App;
