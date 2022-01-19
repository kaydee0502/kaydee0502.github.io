import { createSlice, configureStore } from "@reduxjs/toolkit";

const verbSlice = createSlice({
  name: "verb",
  initialState: {
    value: "GET",
  },
  reducers: {
    setVerb: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setVerb } = verbSlice.actions;

export const store = configureStore({
  reducer: verbSlice.reducer,
});
