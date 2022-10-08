import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Clear {
  videogamesDetail: object | void;
}

const initialState: Clear = {
  videogamesDetail: {},
};

const clearSlice = createSlice({
  name: "clear",
  initialState,
  reducers: {
    clear_filter: (state, action: PayloadAction) => {
      state.videogamesDetail = action.payload;
    },
  },
});

export default clearSlice.reducer;
