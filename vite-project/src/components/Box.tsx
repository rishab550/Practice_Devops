import { useState } from "react";

type FuncType = {
  func: () => void;
  func2: (a: string) => void;
  func3: (a: number, b: number) => void;
};

const Box = ({ func, func2, func3 }: FuncType) => {
  func();
  func2("Rishabh Garg");

  const handleSum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   func3(val, val2)
  };

  const [val, setVal] = useState<number>(0);
  const [val2, setVal2] = useState<number>(0);

  return (
    <>
      <p>Box</p>
      <form onSubmit={handleSum}>
        <input type="number" onChange={(e) => setVal(Number(e.target.value))} />
        <input type="number" onChange={(e) => setVal2(Number(e.target.value))} />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Box;
