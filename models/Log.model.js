const { Schema, model } = require("mongoose");

const logSchema = new Schema(
  {
    category: {
      type: String,
      enum: ["Vaccines", "Health", "Food"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    expirationDate: {
      type: Date,
    },
    comment: String,
    foodBrand: String,
    foodFlavor: String,
    foodQuantity: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Log = model("Log", logSchema);

module.exports = Log;
