import axios from "axios";
import genresSlice from "./genresSlice";

// All Genders
export const getAllCourses = () => (dispatch) => {
  axios
    .get("http://localhost:3001/genres")
    .then((res) => dispatch(genresSlice(res.data)))
    .catch((e) => console.log(e));
};

// 42:50
