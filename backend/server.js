const express = require("express");
const app = express();

//sample api endpoint
app.get("/", (req, res) => {
  console.log("Hello World YEAH"); //log the sentence to the terminal
  res.send("Hell YEAH from the backend");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running on http://local host:${port}`);
});
