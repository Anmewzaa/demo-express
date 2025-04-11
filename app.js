const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGO_URI = "";

app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to database successfully`))
  .catch((err) => console.log(`Error : ${err}`));

app.get("/", (req, res) => {
  res.json({ Message: "HELLO WORLD !" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
