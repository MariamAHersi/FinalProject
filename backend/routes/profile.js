const express = require('express');
const router = express.Router();
const DatabaseUploader = require('../utils/databaseUpload');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const schema = {
      // Define your schema here
      name: String,
      age: Number,
      // ... other fields
    };

    const count = await DatabaseUploader.uploadDataset(
      req.file.path,
      'YourModelName',
      schema
    );

    res.json({ message: `Successfully uploaded ${count} documents` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;