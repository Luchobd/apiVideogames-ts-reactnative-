// const express = require("express");
// const fs = require("fs");
// const router = express.Router();

// const PATH_ROUTES = __dirname;
// console.log(PATH_ROUTES);

// const removeExtension = (filename: string) => {
//   return filename.split(".").shift();
// };

// fs.readdirSync(PATH_ROUTES).filter((file: string) => {
//   const name = removeExtension(file);
//   console.log(file);
//   console.log(name);
//   // if (name !== "index") {
//   router.use(`/${name}`, require(`./${file}`));
//   // router.use("/" + "videogames", require("./" + "videogames.ts"));
//   // }
//   // console.log(file);
// });

// module.exports = router;

// export {};

import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta.../${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
