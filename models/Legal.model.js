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
    files: [{ type: String }],
    expirationDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Legal = model("Legal", legalSchema);

module.exports = Legal;
