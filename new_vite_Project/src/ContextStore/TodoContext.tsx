import { createContext } from "react";


const TodoContextStore = createContext<>();

const TodoProvider = ({ children }: { children: ReactNode }) => {
  return <TodoContext.Provider value={}>{children}</TodoContext.Provider>;
};

const TodoContext = () => {
  return (
    <>
      <TodoProvider>
        <div>TodoContext</div>
      </TodoProvider>
    </>
  );
};


export default TodoContext