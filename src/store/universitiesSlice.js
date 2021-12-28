import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const GET_COUNTRIES_URL =
  "https://cors-anywhere.herokuapp.com/https://api.first.org/data/v1/countries";
const GET_UNIVERSITIES_URL = "http://universities.hipolabs.com/search?country=";

// Get ALL COUNTRIES
export const getCountries = createAsyncThunk(
  "universities/getCountries",
  async (thunkAPI) => {
    console.log("running");
    const res = await fetch(GET_COUNTRIES_URL).then((data) => data.json());

    let data = Object.entries(res.data).map(([key, value]) => ({
      [key]: value.country,
    }));

    return data;
  }
);
// Get ALL UNIVERSITIES
export const getUniversities = createAsyncThunk(
  "universities/getUniversities",
  async ({ country }) => {
    const res = await fetch(`${GET_UNIVERSITIES_URL}${country}`).then((data) =>
      data.json()
    );

    return res;
  }
);

// SLICE
const initialState = {
  countries: [],
  universities: [],
};
const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {},
  extraReducers: {
    //   GET ALL COUNTRIES
    [getCountries.fulfilled]: (state, { payload }) => {
      toast.success("Fetch data successfully");
      state.countries = payload;
    },
    [getCountries.rejected]: (state) => {
      toast.error(
        "There was an error to load countries, please contact customer service  999-999-999"
      );
    },
    //   GET ALL UNIVERSITIES
    [getUniversities.fulfilled]: (state, { payload }) => {
      toast.success("Fetch data successfully");
      state.universities = payload;
    },
    [getUniversities.rejected]: (state) => {
      toast.error(
        "There was an error to load universities, please contact customer service  999-999-999"
      );
    },
  },
});

export const universitiesActions = universitiesSlice.actions;
export default universitiesSlice;
