

// import { getAllData } from "../models/users.js";
// import db from "../db/index.js"


// export async function getAlldata() {
//   const result = await db.query(`SELECT * FROM help;`);
//   return result.rows;
// }


import { getAllData, getAllDataById, getHelpByFname } from "../models/users.js";
import express from "express";
const router = express.Router();


/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await getAllData();

  res.json({
    success: true,
    payload: data
  });
});



/* GET users listing. */
// router.get("/", async function (req, res, next) {
//   console.log("Running...");

//   const allHelpData = await getAllData();
//   res.json({ success: true, payload: allHelpData });
// });

// message: "I wish we had some information to give you ☹️"

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const requestedHelp = await getAllDataById(id);
  res.json({
    success: true,
    message: `Found help ${id}`,
    payload: requestedHelp,
  });
});

export default router;
