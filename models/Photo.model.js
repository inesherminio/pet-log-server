const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Photo = model("Photo", photoSchema);

module.exports = Photo;
