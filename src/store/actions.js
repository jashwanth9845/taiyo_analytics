import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://disease.sh/v3/covid-19/";

export const getGraphData = createAsyncThunk(
  "graph/getGraphData",
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}historical/all?lastdays=all`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getContryData = createAsyncThunk(
  "contry/getContryData",
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}countries`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
