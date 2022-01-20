import query from "../db/index.js";

export async function getAllData() {
  const data = await query(`SELECT * FROM help;`);
  return data;
}

export async function getAllDataById(id) {
  const data = await query(`SELECT * FROM id WHERE id =$1;`, [id]);
  return data.rows;
}

export async function getHelpByFname(fname) {
  const data = await query(
    `SELECT * FROM help WHERE fname ILIKE '%' || $1 || '%';`,
    [fname]
  );
  return data.rows;
}
