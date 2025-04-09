const express = require("express");
const axios = require("axios");
const cors = require("cors");

const port = 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get("http://10.2.0.2:80");
    res.send(`Nginx Response: ${response.data}`);
  } catch (error) {
    console.error("Error connecting to Nginx:", error);
    res.status(500).send("Failed to connect to Nginx");
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
