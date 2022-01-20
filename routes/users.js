import express from "express";
const router = express.Router();

import { getAllData, getAllDataById, getHelpByFname } from "../models/users.js";
// import helpData from "../helpData.js"

/* GET users listing. */
router.get("/", async function (req, res, next) {
  console.log("Running...");

  const allHelpData = await getAllData();
  res.json({ success: true, payload: allHelpData });
});

// router.get("/", async (req, res) => {
//   const { fname, author } = req.query;

//   if (title) {
//     const searchResults = await getHelpByFname(fname);
//     res.json({
//       success: true,
//       message: `Searched titles for ${fname}`,
//       payload: searchResults,
//     });
//     return;
//   }

//   const books = await getAllBooks();

//   res.json({ success: true, message: `all books`, payload: books });
// });

// message: "I wish we had some information to give you ☹️"

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