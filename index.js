import express from "express";
import mongoose from "mongoose";

import indexRouter from "./routes/indexRouter.js";
import userRouter from "./routes/userRouter.js";
import resultsRouter from "./routes/resultsRouter.js";

import keys from "./config/keys.js";

const app = express();

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

app.use(express.json());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/results", resultsRouter);

app.listen(3001, () => {
  console.log("Server online");
});

