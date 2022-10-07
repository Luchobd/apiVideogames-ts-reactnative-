import { Router } from "express";
import getApiInfo from "../utils/getVideogames";
import {
  getVideogamesDb,
  saveVideogamesDb,
  getVideogameById,
  deleteVideogameDb,
} from "../controllers/videogames";

const router = Router();

// router.get("/");

router.get("/", getVideogamesDb);
router.post("/", saveVideogamesDb);
router.get("/:id", getVideogameById);
router.delete("/:id", deleteVideogameDb);

router.post("/apiVideogames", getApiInfo, saveVideogamesDb);

export { router };
