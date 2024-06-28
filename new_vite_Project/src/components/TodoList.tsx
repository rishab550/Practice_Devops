// src/components/TodoList.tsx
import React, { useContext } from "react";
import { TodoContext } from "../ContextStore/TodoContext";
import TodoItem from "../components/TodoItem";

const TodoList: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return null;
  }

  const { todos } = todoContext;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
