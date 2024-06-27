import React, { useState } from "react";


type AddTodoType = {
    id: number;
    text: string;
}

const AddTodo = () => {
  const [addTodo, setAddTodo] = useState<string>("");
  const [todo, setTodo] = useState<AddTodoType[]>([])
  

  const handleSubmit = () => {
    
    const newTodo:AddTodoType = {
        id: todo.length + 1,
        text: String(addTodo)
    }
    
    setTodo([...todo, newTodo])
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={addTodo}
          placeholder="Enter Your ToDo Here"
          onChange={(e) => {
            setAddTodo(String(e.target.value));
          }}
        />
        <button onSubmit={handleSubmit}>Add</button>
      </div>
    </>
  );
};

export default AddTodo;
