const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  experience: { type: Number, required: true },
  role: { type: String, required: true },
  qualification: { type: String, required: true },
  location: { type: String },
  jobType: { type: String, required: true },
  description: { type: String, required: true },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", JobSchema);
