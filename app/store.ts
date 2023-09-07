import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import pokemonReducer from "./features/pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});

// exportar store dandole el tipo AppDispatch ya que es typescript
export type AppDispatch = typeof store.dispatch;

// exportar el tipo RootState para poder usarlo en los componentes, obtiene el tipo de dato que regresa la funcion, esto en caso si agregamos mas slices, manera correcta de hacerlo
export type RootState = ReturnType<typeof store.getState>;
