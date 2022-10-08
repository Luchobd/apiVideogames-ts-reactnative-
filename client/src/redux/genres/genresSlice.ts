import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Genre {
  genres: Array<string> | undefined | void;
}

const initialState: Genre = {
  genres: [],
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    get_genres: (state, action: PayloadAction) => {
      state.genres = action.payload;
    },
  },
});

export default genresSlice.reducer;
