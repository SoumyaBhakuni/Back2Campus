const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: String, required: true },
  eventTime: { type: String, required: true },
  location: { type: String, required: true },
  eventType: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Event", EventSchema);
