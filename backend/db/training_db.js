// training-db.js
const { Pool } = require('pg');

const trainingPool = new Pool({
  user: 'app_user', // Using app_user with read-only access
  host: 'localhost',
  database: 'maternal_health_training',
  password: 'secure_password',
  port: 5432,
});

module.exports = trainingPool;