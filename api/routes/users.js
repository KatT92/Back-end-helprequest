import express from "express";
const router = express.Router();

import { getAllData } from "../models/users.js";

/* GET users listing. */
router.get("/", async function (req, res, next) {
  console.log("Running...");

  const allHelpData = await getAllData();
  res.json({ success: true, payload: allHelpData });
});

export default router;
// message: "I wish we had some information to give you ☹️"
