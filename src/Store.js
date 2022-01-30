import { createSlice, configureStore } from "@reduxjs/toolkit";

const verbSlice = createSlice({
  name: "verb",
  initialState: {
    verbValue: "GET",
    optionValue: "",
    dataValue: "",
  },
  reducers: {
    setVerb: (state, action) => {
      state.verbValue = action.payload;
    },

    setOption: (state, action) => {
      state.optionValue = action.payload;
    },

    setData: (state, action) => {
      state.dataValue = action.payload;
    },
  },
});

export const { setVerb, setOption, setData } = verbSlice.actions;

export const store = configureStore({
  reducer: verbSlice.reducer,
});
