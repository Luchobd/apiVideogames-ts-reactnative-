require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
import { RequestHandler } from "express";

const getGenres: RequestHandler = async (req, res, next) => {
  try {
    const genres = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );

    interface genresInterface {
      name: string;
    }

    const genreInfo = await genres.data.results.map(
      (genre: genresInterface) => ({
        name: genre.name,
      })
    );

    req.body = genreInfo;
    console.log(getGenres);
    next();
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Unexpected Error");
  }
};

module.exports = { getGenres };
