import db from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS help 
(id SERIAL PRIMARY KEY, date TEXT, fname TEXT, lname TEXT, room INT, problem TEXT, tried TEXT);`;

async function createHelpTable() {
  const response = await query(sqlString);
  console.log("Created books table", response);
}
createHelpTable()
db.end()