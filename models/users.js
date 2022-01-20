import db from "../db/index.js";
// import helpData from "../helpData.js";

export async function getAllData() {
  const data = await db.query(`SELECT * FROM help;`);
  return data;
}

getAllData()