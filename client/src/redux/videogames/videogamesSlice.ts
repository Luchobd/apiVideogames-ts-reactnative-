import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Games {
  videogames: Array<string> | Array<number> | Array<boolean> | undefined | void;
  allVideogames: string[] | number[] | boolean[] | undefined | void;
  videogamesDetail: object | string | number | boolean | undefined | void;
}

const initialState: Games = {
  videogames: [],
  allVideogames: [],
  videogamesDetail: {},
};

const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    get_Videogames: (state, action: PayloadAction) => {
      state.videogames = action.payload;
      state.allVideogames = action.payload;
    },
    post_Videogames: (state) => {
      return { ...state };
    },
    get_NameVideogames: (state, action: PayloadAction) => {
      state.videogames = action.payload;
    },
    get_Detail: (state, action: PayloadAction) => {
      state.videogamesDetail = action.payload;
    },
  },
});

export default videogamesSlice.reducer;
