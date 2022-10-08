import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { access } from "fs";

interface genresName {
  name: string;
}

interface arrayGetGames {
  idVideogames: string;
  name: string;
  background_image: string;
  genres: string[];
  description: string;
  released: string;
  rating: number;
  platforms: string[];
}

//  interface FilterAndOrder {
//   videogames: Array<string> | Array<number> | Array<boolean> | undefined | void;
//   allVideogames: string[] | number[] | boolean[] | undefined | void;
//   genres: Array<string> | undefined | void;
//   videogamesDetail: object | string | number | boolean | undefined | void;
// }

// type FormReducerAction =
//   | {
//       type: "change-value";
//       payload: {
//         inputName: string;
//         inputValue: string;
//       };
//     }
//   | {
//       type: "clear";
//     };

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  videogamesDetail: {},
};

const filterOrderSlice = createSlice({
  name: "filterOrder",
  initialState,
  reducers: {
    filter_by_gender: (state, action: PayloadAction) => {
      //   state.allVideogames = action.payload;
      //   const allVideogames = state.allVideogames;
      //   const genresFiltered =
      //     action.payload === "All" ? allVideogames : allVideogames?.filter((game) =>
      //           game.genres?.find((el) => el.name === action.payload))
    },
    filter_by_created: (state, action: PayloadAction<void | string>) => {
      //   const createdFilter =
      //     action.payload === "VideogameCreated"
      //       ? state.allVideogames.filter((game) => game.createdIdDb)
      //       : state.allVideogames.filter((game) => !game.createdInDb);
    },
    order_by_name: (state, action) => {},
    order_by_rating: (state, action) => {},
  },
});
