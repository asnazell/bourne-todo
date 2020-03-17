import React from "react";
import { Header } from "./components/Header";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoAdd />
      <TodoList />
    </div>
  );
};

export default App;
