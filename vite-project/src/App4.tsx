import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  StateType,
  incrementByValue,
} from "./components/React";

const App4 = () => {
  const [val, setVal] = useState<number>(0);

  const count = useSelector((state: StateType) => state.count);

  const dispatch = useDispatch();

  const incrementByValueHandler = () => {
    setVal(0);
    dispatch(incrementByValue(val));
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h2>{count}</h2>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={incrementByValueHandler}>
        Add
      </button>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
    </>
  );
};

export default App4;
