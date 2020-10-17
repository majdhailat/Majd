const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home")
});

app.listen(4000, () => {
  console.log("Server started on port 4000.");
});
