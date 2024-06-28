// src/components/TodoItem.tsx
import React, { useContext } from "react";
import { Todo } from "../ContextStore/types";
import { TodoContext } from "../ContextStore/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return null;
  }

  const { toggleTodo, removeTodo } = todoContext;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
