const axios = require("axios");
const { genreModel } = require("../models/index");
const { API_KEY } = process.env;
import { RequestHandler } from "express";

const getApiInfo: RequestHandler = async (req, res, next) => {
  const genresFind = await genreModel.find({});

  interface arrayGetGames {
    idVideogames: string;
    name: string[];
    background_image: string;
    genres: string[];
    description: string;
    released: string;
    rating: number;
    platforms: string[];
  }

  interface apiGetGames {
    id: string;
    name: string[];
    genresFind: string[];
    background_image: string;
    released: string;
    rating: number;
    platforms: string[];
  }

  interface genresName {
    name: string;
  }

  // interface platformsInt {
  //   platform:any;
  // }

  interface genresInt {
    name: string[];
  }

  let getGames: arrayGetGames[] = [];
  for (let i = 1; i <= 6; i++) {
    let api = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );
    api.data.results.map(async (e: apiGetGames) => {
      let searchId = await axios.get(
        `https://api.rawg.io/api/games/${e.id}?key=${API_KEY}`
      );
      let descriptionGame = searchId.data.description_raw;
      const genresEach = genresFind.map((e: genresInt) => e.name);
      console.log(genresFind);

      let arrayGenres = [];
      for (let i = 0; i < genresEach.length; i++) {
        const genresFilter = genresFind.filter(
          (e: genresName) => e.name === genresEach[i]
        );
        arrayGenres.push(genresFilter);
      }
      const genresFlat = arrayGenres.flat();
      const genresMap = genresFlat.map((e) => e._id);

      // const platfomsMap = e.platforms.map((e:prueba) => e.platform);
      console.log(e.platforms);
      getGames.push({
        idVideogames: e.id,
        name: e.name,
        background_image: e.background_image,
        genres: genresMap,
        description: descriptionGame,
        released: e.released,
        rating: e.rating,
        platforms: e.platforms.map((e: any) => e.platform.name),
      });
    });
  }
  req.body = getGames;

  next();
};

export default getApiInfo;
