// import express from "express";
// const router = express.Router();

// import { getAllData } from "../models/users.js";
// import db from "../db/index.js"


// export async function getAlldata() {
//   const result = await db.query(`SELECT * FROM help;`);
//   return result.rows;
// }


import express from "express";
import { getAllData } from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await getAllData();

  res.json({
    success: true,
    payload: data
  });
});

export default router;


// import helpData from "../helpData.js"

/* GET users listing. */
// router.get("/", async function (req, res, next) {
//   console.log("Running...");

//   const allHelpData = await getAllData();
//   res.json({ success: true, payload: allHelpData });
// });

// export default router;
// message: "I wish we had some information to give you ☹️"
