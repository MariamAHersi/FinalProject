// app-db.js
const { Pool } = require('pg');

const appPool = new Pool({
  user: 'app_user',
  host: 'localhost',
  database: 'maternal_health_app',
  password: 'secure_password',
  port: 5432,
});

module.exports = appPool;// app-db.js