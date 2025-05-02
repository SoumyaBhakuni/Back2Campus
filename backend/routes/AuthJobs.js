const express = require("express");
const router = express.Router();
const Job = require("../models/jobs");

// Create a new job
router.post("/", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job posted successfully!", job });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to post job" });
  }
});

// Get all job postings
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch jobs" });
  }
});

// Get a single job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch job" });
  }
});

// Delete a job
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to delete job" });
  }
});

module.exports = router;
