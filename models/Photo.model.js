const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Photo = model("Photo", photoSchema);

module.exports = Photo;
