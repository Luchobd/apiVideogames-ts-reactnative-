require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dbConnect = require("./config/mongo");
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

const { PORT } = process.env;

app.use(router);

app.listen(PORT, () => {
  console.log(`Videogames API is ready in port ${PORT}`);
});

dbConnect();
