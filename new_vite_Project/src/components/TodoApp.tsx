// src/components/TodoApp.tsx
import React from "react";
import TodoProvider from "../ContextStore/TodoContext";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp: React.FC = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
