const express = require("express");
const app = express();

//sample api endpoint
app.get("/api/helloYeah", (req, res) => {
  res.json({ message: "im checking if this is working" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server running on http://local host:${port}`);
});
