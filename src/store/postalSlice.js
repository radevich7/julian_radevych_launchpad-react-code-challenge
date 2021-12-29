import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const GET_ADDRESS = "https://api.zippopotam.us/us/";

// Get the address
export const getAddress = createAsyncThunk(
  "postal/getAddress",
  async (postal) => {
    const res = await fetch(`${GET_ADDRESS}${postal}`).then((data) =>
      data.json()
    );

    if (Object.keys(res).length > 0) {
      toast.success("Address has been successfully received");
      return res;
    } else {
      return toast.error(
        "You have entered invalid postal code in USA (5 digits)"
      );
    }
  }
);

// SLICE
const initialState = {
  addressDetails: null,
  coords: [51.049999, -114.066666],
  showButton: false,
};
const postalSlice = createSlice({
  name: "postal",
  initialState,
  reducers: {},
  extraReducers: {
    //   GET ADDRESS DETAILS BY POSTAL CODE
    [getAddress.fulfilled]: (state, { payload }) => {
      let currentCoords = [
        payload.places[0].latitude,
        payload.places[0].longitude,
      ];
      state.showButton = true;
      state.coords = currentCoords;
      state.addressDetails = payload;
    },
    [getAddress.rejected]: (state) => {
      toast.error(
        "Unfortunately, we weren't able to lokate the address based on this postal code"
      );
    },
  },
});

export const postalActions = postalSlice.actions;
export default postalSlice;
