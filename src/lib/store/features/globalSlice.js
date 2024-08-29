import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  name: null,
  userDetails: null,
};

export const globalSlice = createSlice({
  name: "IntelliEdtechStudent",
  initialState,
  reducers: {
    setToken: (state, token) => {
      state.token = token;
    },

    setName: (state, payload) => {
      state.name = payload;
    },

    setUserDetails: (state, payload) => {
      state.userDetails = payload;
    },
  },
});

export const {
  setToken,
  setName,
  setUserDetails,
} = globalSlice.actions;

export default globalSlice.reducer;
