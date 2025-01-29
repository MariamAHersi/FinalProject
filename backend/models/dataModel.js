const mongoose = require('mongoose');

// Define your schema based on your data structure
const dataSchema = new mongoose.Schema({
  // Add your fields here
  // Example:
  name: String,
  age: Number,
  // ... other fields
});

module.exports = mongoose.model('Data', dataSchema);