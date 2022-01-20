import pg from "pg";

const pool = new pg.Pool({
  connectionString:
    "postgres://whsrdosnytuazf:b23712db6f28bf784e59837a85281f23ab6bdbd9070261862f9285036960a2de@ec2-34-246-155-237.eu-west-1.compute.amazonaws.com:5432/d5aee003nu79j4",
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
