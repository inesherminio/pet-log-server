const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    category: {
      type: String,
      enum: [
        "Vaccines",
        "Vet",
        "Bath&Grooming",
        "Parasite Control",
        "Medication",
        "Training",
        "Legal",
        "Food",
        "Other",
      ],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    pet: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
        required: true,
      },
    ],
    Date: {
      type: Date,
      required: true,
    },
    place: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
