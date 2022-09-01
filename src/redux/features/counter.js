import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      return {
        ...state,
        counter: state.counter + 1,
      };
    },
    decrement(state) {
      return {
        ...state,
        counter: state.counter - 1,
      };
    },
  },
});

export const selectCounter = (state) => state.counter.counter;

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
