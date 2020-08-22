const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
})


app.listen(3000, () => console.log("Server started on port 3000."));
