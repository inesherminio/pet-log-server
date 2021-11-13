const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    statusPrivate: {
      type: Boolean,
      required: true,
    },
    tags: [{ type: String, required: true }],
    image: String,
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    totalTime: {
      type: Number,
      min: 0,
    },
    prepTime: {
      type: Number,
      min: 0,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ingredients: String,
    preparation: String,
    rating: Number,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
