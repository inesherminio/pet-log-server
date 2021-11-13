const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    title: { type: String, required: true },
    score: {
      type: Number,
      required: true,
      enum: [0, 1, 2, 3, 4, 5],
    },
    comment: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
