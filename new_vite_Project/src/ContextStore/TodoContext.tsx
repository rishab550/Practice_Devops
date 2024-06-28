// src/context/TodoContext.tsx
import React, { createContext, useState, FC, ReactNode } from "react";
import { Todo, TodoContextType } from "./types";

// // src/context/types.ts
// export interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// export interface TodoContextType {
//   todos: Todo[];
//   addTodo: (text: string) => void;
//   toggleTodo: (id: number) => void;
//   removeTodo: (id: number) => void;
// }

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
