import pg from "pg";
import {
  databaseHost,
  databaseName,
  username,
  dbPort,
  dbUrl,
  password,
} from "../config.js";

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
