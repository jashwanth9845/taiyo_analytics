import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./slices/graphSlice";
import contryReducer from "./slices/contrySlice";

// Configure the Redux store with combined reducers
export const store = configureStore({
  reducer: {
    graph: graphReducer, // Assign the graph reducer to 'graph' slice
    contry: contryReducer, // Assign the contry reducer to 'contry' slice
  },
});
