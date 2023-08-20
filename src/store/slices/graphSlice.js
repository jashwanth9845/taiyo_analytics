import { createSlice } from "@reduxjs/toolkit";
import { getGraphData } from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  extraReducers: {
    [getGraphData.pending]: (state) => {
      state.isLoading = true;
    },
    [getGraphData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getGraphData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default graphSlice.reducer;
