const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", (_, res) => {
  res.json({ data: "API is accounted for" });
});

app.listen(port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
