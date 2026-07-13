const { Client } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  port: 5433,
  user: "postgres",
  password: "12345",
  database: "backenddb",
});

(async () => {
  try {
    await client.connect();
    console.log("✅ Connected!");

    const result = await client.query("SELECT NOW()");
    console.log(result.rows);

    await client.end();
  } catch (err) {
    console.error(err);
  }
})();
