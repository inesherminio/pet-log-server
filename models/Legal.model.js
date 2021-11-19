const { Schema, model } = require("mongoose");

const legalSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Liability Insurance", "Health Insurance"],
    },
    entity: String,
    documentId: String,
    expirationDate: { type: Date, required: true },
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  },
  {
    timestamps: true,
  }
);

const Legal = model("Legal", legalSchema);

module.exports = Legal;
