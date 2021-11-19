const { Schema, model } = require("mongoose");

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Cat", "Dog"],
    },
    profilePic: String,
    birthday: Date,
    breed: String,
    gender: {
      type: String,
      enum: ["Male", "Female", ""],
    },
    weight: {
      type: Number,
      min: 0,
    },
    avgDailyFood: {
      type: Number,
      min: 0,
    },
    logs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Log",
      },
    ],
    chipId: String,
    legalData: [
      {
        type: Schema.Types.ObjectId,
        ref: "Legal",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;
