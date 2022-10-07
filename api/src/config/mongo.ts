require("dotenv").config();
const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

const dbConnect = () => {
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err: string, res: string) => {
      !err
        ? console.log("*********** CORRECT CONNEXTION ************")
        : console.log("*********** CONNECTION ERROR ************");
    }
  );
};

module.exports = dbConnect;

export {};
