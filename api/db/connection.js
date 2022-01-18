import pg from "pg";
import { databaseHost, databaseName, username, dbPort, password } from "../config";

const pool = new pg.Pool(
    {
    host: databaseHost,
    database: databaseName,
    user: username,
    port: dbPort,
    password: password,
});

export default pool;
