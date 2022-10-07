const express = require("express");
const router = express.Router();

const { getGenres } = require("../utils/getGenres.ts");
const { saveGenresDB, showGenreDb } = require("../controllers/genres.ts");

router.get("/", showGenreDb);

router.post("/dbGenres", getGenres, saveGenresDB);

router.post("/", saveGenresDB);

module.exports = { router };
