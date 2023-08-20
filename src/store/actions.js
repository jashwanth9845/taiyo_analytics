import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://disease.sh/v3/covid-19/";

// Async thunk action to fetch graph data
export const getGraphData = createAsyncThunk(
  "graph/getGraphData",
  async (data, { rejectWithValue }) => {
    try {
      // Fetch historical COVID-19 data
      const { data } = await axios.get(`${baseUrl}historical/all?lastdays=all`);
      return data; // Return fetched data on success
    } catch (error) {
      return rejectWithValue(error.message); // Return error message on failure
    }
  }
);

// Async thunk action to fetch country data
export const getContryData = createAsyncThunk(
  "contry/getContryData",
  async (data, { rejectWithValue }) => {
    try {
      // Fetch list of countries' data
      const { data } = await axios.get(`${baseUrl}countries`);
      return data; // Return fetched data on success
    } catch (error) {
      return rejectWithValue(error.message); // Return error message on failure
    }
  }
);
