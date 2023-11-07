const express = require("express");
const app = express();
const cors = require("cors");

// Enable CORS
app.use(cors());

//API setting
app.get("/api/hello", (req, res) => {
  res.josn({ message: "API is set" });
});

//sample input
app.get("/", (req, res) => {
  console.log("Hello World YEAH"); //log the sentence to the terminal
  res.send("Hell YEAH from the backend");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running on http://local host:${port}`);
});
