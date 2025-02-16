const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");
const healthMetricsRoutes = require("./routes/healthMetricsRoutes");
const uploadRoutes = require('./routes/uploadRoutes');

// Routes Middleware
app.use("/api/users", userRoutes);
app.use("/api/health-metrics", healthMetricsRoutes);
app.use('/api', uploadRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
