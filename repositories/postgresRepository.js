const pool = require("../db");

async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users ORDER BY id");
  return result.rows;
}

async function addUser(user) {
  const result = await pool.query(
    "INSERT INTO users(name) VALUES($1) RETURNING *",
    [user.name],
  );

  return result.rows[0];
}

module.exports = {
  getAllUsers,
  addUser,
};
