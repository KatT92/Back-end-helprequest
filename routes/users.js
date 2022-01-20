import { getAllData, getAllDataById, getHelpByFname } from "../models/users.js";
import express from "express";
const router = express.Router();


import helpData from '../helpData.js'

/* GET users listing. */
router.get("/", async function (req, res, next) {
  // const data = await getAllData();
  const data = helpData
  res.json({
    success: true,
    payload: data
  });
});

router.post("/", async function (req, res, next) {
  // const data = await getAllData();
  const data = req.params
  console.log("d", data)
  const data2 = req.body
  console.log("d2", data2)
  res.json({
    success: true,
    payload1: data,
    payload2: data2
  });
});

// router.get("/:id", async function (req, res) {
//   const { id } = req.params;
//   const requestedHelp = await getAllDataById(id);
//   res.json({
//     success: true,
//     message: `Found help ${id}`,
//     payload: requestedHelp,
//   });
// });

export default router;
