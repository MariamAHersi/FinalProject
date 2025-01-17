const mongoose = require("mongoose");

const healthMetricSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bloodPressure: { type: String, required: true },
  heartRate: { type: Number, required: true },
  recordedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("HealthMetric", healthMetricSchema);
