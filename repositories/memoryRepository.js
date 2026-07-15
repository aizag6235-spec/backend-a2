const pool = require("../db");

async function createUser(name, password) {
  const result = await pool.query(
    "INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *",
    [name, password],
  );

  return result.rows[0];
}

async function getUserByName(name) {
  const result = await pool.query("SELECT * FROM users WHERE name = $1", [
    name,
  ]);

  return result.rows[0];
}

module.exports = {
  createUser,
  getUserByName,
};
