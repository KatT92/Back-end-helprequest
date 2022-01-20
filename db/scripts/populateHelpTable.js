import { dbUrl } from "../../config.js";
import helpData from "../../helpData.js";
import db from "../index.js";

async function populateHelpTable() {
  for (let i = 0; i < helpData.length; i++) {
    const fname = helpData[i].fname;
    const lname = helpData[i].lname;
    const room = helpData[i].room;
    const problem = helpData[i].problem;
    const tried = helpData[i].tried;
    // const countdown = help[i].countdown;

    const response = await query(
      `INSERT INTO help (fname, lname, room, problem, tried)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [fname, lname, room, problem, tried]
    );
    console.log(response);
  }
}

populateHelpTable()
db.end()

