import { useState } from "react";

const App = () => {
  type totalTodoType = {
    text: string;
    id: number;
  };

  const [todo, setTodo] = useState<string | number>("");
  const [totalTodo, setTotalTodo] = useState<totalTodoType[]>([]);

  const handleTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newTodo: totalTodoType = {
      text: String(todo),
      id: totalTodo.length + 1, // Assigning a unique id
    };
    setTotalTodo([...totalTodo, newTodo]);
    setTodo(""); // Clear input after adding todo
    console.log(totalTodo);
  };

  const handleDel = (id: number) => {
    const updatedTodo = totalTodo.filter((item) => item.id !== id);
    setTotalTodo(updatedTodo);
  };

  return (
    <>
      <div>
        <h1>To Do App</h1>
        <input
          type="text"
          placeholder="Add your to-do here"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(String(e.target.value))
          }
        />
        <button onClick={handleTodo}>Add</button>
      </div>
      <div className="store">
        {totalTodo.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.text}</p>
              <button onClick={() => handleDel(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;






