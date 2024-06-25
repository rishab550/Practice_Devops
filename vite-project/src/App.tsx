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


const App = () => {
  const [val, setVal] = useState<string>("");
  const [displaySum, setSum] = useState<number | undefined>()

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
      <div>
        {displaySum}
      </div>
    </>
  );
};

export default App;
