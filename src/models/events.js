const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    poster: { type: String, required: true },
    attractions: { type: Array, required: true },
    description: { type: String, required: true },
    scheduled: { type: Date, required: true },
    number_tickets: { type: Number, required: true, default: 0 },
  },
  {
    collection: "events",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("events", schema, "events");
