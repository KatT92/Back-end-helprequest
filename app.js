import express from "express";

import cors from "cors";


import router from './routes/users.js'


const app = express();

app.use(cors());
app.use(express.json());


//app.use("/helpData", router);

app.use("/users", router);


app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
