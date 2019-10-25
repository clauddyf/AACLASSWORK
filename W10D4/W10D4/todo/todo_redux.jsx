import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
import { receiveTodo, receiveTodos } from "./frontend/actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  ReactDOM.render(<h1>Todos App</h1>, root);
});

