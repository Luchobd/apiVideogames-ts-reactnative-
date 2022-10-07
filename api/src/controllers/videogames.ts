// import { RequestHandler } from "express";
require("dotenv").config();
import { Request, Response } from "express";
const { videogameModel } = require("../models/index");

console.log(videogameModel);

// Videogames All and Query
const getVideogamesDb = async (req: Request, res: Response) => {
  const name = req.query.name as string;
  try {
    const videogameResult = await videogameModel.find({}).populate("genres");

    if (name) {
      interface filterNameInterface {
        name: string;
      }

      let videoGameName = videogameResult.filter((game: filterNameInterface) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );

      videoGameName.length
        ? res.status(200).send(videoGameName)
        : res.status(200).send(["Game not found"]);
    } else {
      res.status(200).send(videogameResult);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

// Videogames Create
const saveVideogamesDb = async (req: Request, res: Response) => {
  try {
    const apiVideogames = req.body;

    const createVideogame = await videogameModel.create(apiVideogames);
    res.status(200).send(createVideogame);
  } catch (error) {
    res.status(404).send(error);
  }
};

// Videogame by ID
const getVideogameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const videogamesID = await videogameModel.findById(id).populate("genres");

  if (videogamesID) {
    res.status(200).send(videogamesID);
  } else {
    res.status(404).send({ msg: "Error not found" });
  }
};

// Videogame Delete
const deleteVideogameDb = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await videogameModel.delete({ _id: id });

    return res.status(200).send({ msg: "Videogames Delete" });
  } catch (error) {
    res.status(404).send("Not Found");
  }
};

export {
  getVideogamesDb,
  saveVideogamesDb,
  getVideogameById,
  deleteVideogameDb,
};
