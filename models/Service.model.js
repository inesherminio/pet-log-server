const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    category: {
      type: String,
      enum: [
        "Dog Parks",
        "Vets",
        "Pet Shops",
        "Bath&Grooming",
        "Trainers",
        "Day Care",
      ],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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

const Service = model("Service", serviceSchema);

module.exports = Service;
