const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const compRouter = require("./routes/company");
const crawRouter = require("./routes/crawing");

dotenv.config();

app.get("/api/test", () => {
  console.log("test is successfull");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DBConnection Success");
  })
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/company", compRouter);
app.use("/api/craw", crawRouter);

app.listen(process.env.PORT, () => {
  console.log(`Backend Server is running for PORT:${process.env.PORT}!`);
});
