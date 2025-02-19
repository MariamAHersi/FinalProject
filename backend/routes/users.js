const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Error registering user", details: err });
  }
});

// Get all users (for testing)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

module.exports = router;
