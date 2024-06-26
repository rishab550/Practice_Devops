// import React, { useReducer } from "react";
// import Box4 from "./components/Box4";

// type StateType = {
//   count: number;
// };

// type ActionType =
//   | {
//       type: "Increment";
//       payload: number;
//     }
//   | { type: "Decrement"; payload: number };

// const intialState: StateType = {
//   count: 0,
// };
// const reducer = (state: StateType, action: ActionType): StateType => {
//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + action.payload };
//     case "Decrement":
//       return { count: state.count - action.payload };
//     default:
//       return state;
//   }
// };

// const App3 = () => {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const increment = (): void => {
//     dispatch({
//       type: "Increment",
//       payload: 1,
//     });
//   };
//   const decrement = (): void => {
//     dispatch({
//       type: "Decrement",
//       payload: 1,
//     });
//   };

//   return (
//     <>
//       <Box4 />
//       <h1>Count Change</h1>
//       <p>{state.count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   );
// };

// export default App3;

import React, { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | {
      type: "Increment";
      payload: number;
    }
  | {
      type: "Decrement";
      payload: number;
    };

const intialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
  s;
};

const App3 = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const increment = (): void => {
    dispatch({ type: "Increment", payload: 1 });
  };
  const decrement = (): void => {
    {
      dispatch({ type: "Decrement", payload: 1 });
    }
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App3;
