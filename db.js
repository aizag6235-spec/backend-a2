require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  host: "127.0.0.1",
  port: 5433,
  user: "postgres",
  password: "12345",
  database: "backenddb",
});

module.exports = pool;
