// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// interface StateType {
//   count: number;
// }

// const increment = createAction("incerment");
// const decrement = createAction("decrement");

// const intialState: StateType = {
//   count: 0,
// };

// const rootReducer = createReducer(intialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });

// export const store = configureStore({ reducer: { rootReducer } });

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface StateType {
  count: number;
}

const initialState: StateType = {
  count: 0,
};

const rootSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({ reducer: rootSlice.reducer });
