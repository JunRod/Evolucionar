import { configureStore } from "@reduxjs/toolkit";
import { masculinidadSlice } from "./masculinidad";

export const store = configureStore({
    reducer: {
        masculinidad: masculinidadSlice.reducer,
    }
})