// aqui es para hacer buenas practicas, exportamos funciones que nos dan acceso al estado de redux y actualizaarlo tambien
// estos hooks tienen un tipo, entonces haremos customs hooks para trabajar con nuestros slices

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
