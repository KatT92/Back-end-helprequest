import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // host: databaseHost,
  // database: databaseName,
  // user: username,
  // port: dbPort,
  // password: password,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}
