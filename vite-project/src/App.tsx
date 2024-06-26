import { useState } from "react";
import Box from "./components/Box";
import Box2 from "./components/Box2";

const default_function = () => {
  console.log("Hello World");
};

const handleParams = (a: string) => {
  console.log(a);
  return a;
};

interface Person {
  name: string;
  age: number;
}

const App = () => {
  const [val, setVal] = useState<string>("");
  const [displaySum, setSum] = useState<number | undefined>();
  const [user, setUser] = useState<Person>({
    name: "",
    age: 0,
  });
  const [displayInfo, setDisplayInfo] = useState<Person | undefined>();

  const handleDisplayUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayInfo(user);
  };

  const handleBtn = (a: number, b: number) => {
    let sum = a + b;
    return setSum(sum);
  };

  return (
    <>
      <div>App</div>
      <Box func={default_function} func2={handleParams} func3={handleBtn} />
      <div></div>
      <Box2 label={"form label"} value={val} setVal={setVal} />
      <div>{displaySum}</div>
      <form onSubmit={handleDisplayUser}>
        <input
          type="text"
          placeholder="Please type your name"
          value={user?.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Please type your age"
          value={user?.age}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
          }
        />
        <button type="submit">Register</button>
      </form>
      <div>{displayInfo?.age}</div>
      <div>{displayInfo?.name}</div>
    </>
  );
};

export default App;
