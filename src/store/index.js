import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./slices/graphSlice";
import contryReducer from "./slices/contrySlice";

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    contry: contryReducer,
  },
});
