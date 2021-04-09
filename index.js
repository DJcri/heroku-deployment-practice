const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/", (_, res) => {
  res.json({ data: "Monolith" });
});

app.listen(port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
