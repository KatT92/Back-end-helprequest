import { dbUrl } from "../../config.js";
import helpData from "../../helpData.js";
import query from "../index.js";

async function populateHelpTable() {
  for (let i = 0; i < helpData.length; i++) {
    const date = helpData[i].date;
    const fname = helpData[i].fname;
    const lname = helpData[i].lname;
    const room = helpData[i].room;
    const problem = helpData[i].problem;
    const tried = helpData[i].tried;
    // const countdown = help[i].countdown;

    const response = await query(
      `INSERT INTO help (date, fname, lname, room, problem, tried)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [date, fname, lname, room, problem, tried]
    );
    console.log(response);
  }
}

populateHelpTable()


