import { createSlice, configureStore } from "@reduxjs/toolkit";

const verbSlice = createSlice({
  name: "verb",
  initialState: {
    verbValue: "GET",
    optionValue: "",
  },
  reducers: {
    setVerb: (state, action) => {
      state.verbValue = action.payload;
    },

    setOption: (state, action) => {
      state.optionValue = action.payload;
    },
  },
});

export const { setVerb, setOption } = verbSlice.actions;

export const store = configureStore({
  reducer: verbSlice.reducer,
});
