const { Schema, model } = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const VideogameSchema = new Schema(
  {
    idVideogame: {
      type: Number,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    released: {
      type: String,
    },
    rating: {
      type: Number,
    },
    platforms: [
      {
        type: String,
        require: true,
      },
    ],
    background_image: {
      type: String,
    },
    createdInDb: {
      type: Boolean,
      default: false,
    },
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

VideogameSchema.plugin(mongooseDelete, { overrideMethods: "all" });
const VideogameModel = model("Videogame", VideogameSchema); // -> Creacion Modelo/Schema

module.exports = VideogameModel;

export {};
