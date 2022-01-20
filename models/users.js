import query from "../db/index.js";
// import helpData from "../helpData.js";

export async function getAllData() {
  const data = await query(`SELECT * FROM help;`);
  return data;
}

