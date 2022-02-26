import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.db_url,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}
