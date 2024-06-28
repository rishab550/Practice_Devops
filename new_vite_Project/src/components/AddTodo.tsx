// src/components/AddTodo.tsx
import React, { useState, useContext } from "react";
import { TodoContext } from "../ContextStore/TodoContext";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return null;
  }

  const { addTodo } = todoContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
