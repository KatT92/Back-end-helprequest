import query from "../db/index.js";

export async function getAllData() {
  const data = await query(`SELECT * FROM helpTable;`);
  return data;
}

export async function getAllDataById(id) {
  const data = await query(`SELECT * FROM id WHERE id =$1;`, [id]);
  return data.rows;
}

export async function getHelpByFname(fname) {
  const data = await query(
    `SELECT * FROM helpTable WHERE fname ILIKE '%' || $1 || '%';`,
    [fname]
  );
  return data.rows;
}

export async function addToTable(data) {

    const date = data.date;
    const fname = data.fname;
    const lname = data.lname;
    const room = data.room;
    const problem = data.problem;
    const tried = data.tried;
   
    const response = await query(
      `INSERT INTO helpTable (date, fname, lname, room, problem, tried)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [date, fname, lname, room, problem, tried]
    );
    console.log(response);
  
}
