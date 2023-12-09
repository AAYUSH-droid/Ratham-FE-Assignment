import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
};

const dataSlice = createSlice({
  initialState,
  name: "data",
  reducers: {
    setData: (state, { payload }) => {
      state.name = payload.name;
      state.age = payload.age;
    },
  },
});
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
