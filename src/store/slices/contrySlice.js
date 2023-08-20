import { createSlice } from "@reduxjs/toolkit";
import { getContryData } from "../actions";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const contrySlice = createSlice({
  name: "contry",
  initialState,
  extraReducers: {
    [getContryData.pending]: (state) => {
      state.isLoading = true;
    },
    [getContryData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    },
    [getContryData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload;
    },
  },
});

export default contrySlice.reducer;
