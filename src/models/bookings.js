const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    owner_name: { type: String, required: true },
    owner_email: { type: String, required: true },
    number_tickets: { type: Number, required: true, default: 1 },
    event: { type: mongoose.Types.ObjectId, ref: "events", required: true },
  },
  {
    collection: "bookings",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("bookings", schema, "bookings");
