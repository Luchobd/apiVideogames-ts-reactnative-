import { configureStore } from "@reduxjs/toolkit";
import videogamesSlice from "./videogames/videogamesSlice";
import genresSlice from "./genres/genresSlice";
// import filterOrderSlice from "./filterOrder/filterOrderSlice";
import clearSlice from "./clear/clearSlice";

const store = configureStore({
  reducer: {
    videogamesSlice: videogamesSlice,
    genresSlice: genresSlice,
    clearSlice: clearSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
