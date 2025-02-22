const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profiles');
const metricsRoutes = require('./routes/metrics');
const facilitiesRoutes = require('./routes/facilities');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/facilities', facilitiesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
