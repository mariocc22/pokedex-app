import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

// valor inicial del counter, el cual inizialisamos en 0
const initialState: CounterState = {
  value: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // incrementamos el valor del counter
    increment: (state) => {
      if (state.value > 897) {
        state.value = 898;
        return;
      }
      state.value += 1;
    },
    // decrementamos el valor del counter
    decrement: (state) => {
      if (state.value < 2) {
        return state;
      }
      state.value -= 1;
    },
    // incrementamos el valor del counter por el valor que le pasamos
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value + action.payload > 897) {
        state.value = 898;
        return;
      }
      state.value += action.payload;
    },
    //  decrementamos el valor del counter por el valor que le pasamos
    decrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value - action.payload < 2) {
        state.value = 1;
        return;
      }
      state.value -= action.payload;
    },
    // reseteamos el valor del counter a 0
    reset: (state) => {
      state.value = 1;
    },
  },
});

// asi es como exportamos las acciones que creamos en el slice
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

// asi exportamos el reducer en general
export default counterSlice.reducer;
