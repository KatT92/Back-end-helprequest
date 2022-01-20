import express from "express";
const helpRouter = express.Router();

// import { getAllData } from "../models/users.js";
import helpData from "../helpData.js"

/* GET users listing. */
helpRouter.get("/", async function (req, res, next) {
  console.log("Running...");

  // const allHelpData = await getAllData();
  res.json({ success: true, payload: helpData });
});

export default helpRouter;
// message: "I wish we had some information to give you ☹️"
