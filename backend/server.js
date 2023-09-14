const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utils/db");
require("dotenv").config();

const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/api", require("./routes/authRoutes"));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world!");
});
dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
