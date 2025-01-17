const express = require("express");
const router = express.Router();
const HealthMetric = require("../models/healthMetrics");

// Add a health metric
router.post("/", async (req, res) => {
  const { userId, bloodPressure, heartRate } = req.body;

  try {
    const metric = new HealthMetric({ userId, bloodPressure, heartRate });
    await metric.save();
    res.status(201).json({ message: "Health metric added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error adding health metric", details: err });
  }
});

// Get metrics for a specific user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const metrics = await HealthMetric.find({ userId });
    res.status(200).json(metrics);
  } catch (err) {
    res.status(500).json({ error: "Error fetching metrics" });
  }
});

module.exports = router;
