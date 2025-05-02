const express = require("express");
const router = express.Router();
const Event = require("../models/events");

// ✅ Add a new event
router.post("/add", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event added successfully! 🎉", event: newEvent });
  } catch (err) {
    res.status(500).json({ error: "Failed to add event ❌", details: err.message });
  }
});

// ✅ Get all events
router.get("/all", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events ❌", details: err.message });
  }
});

module.exports = router;
