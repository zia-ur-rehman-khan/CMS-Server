const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const dbHelper = require("./dbHelper/dbHelper.js");
const userRoute = require("./module/user/userRoute");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.send("<h1>Welcome to CMS Server</h1>");
});

app.use("/users", userRoute);

app.listen(port, (err) => {
  if (err) {
    console.log("server is not in listining mood!!");
    return;
  }
  console.log("server is in listning mood");
  dbHelper.dbConnector();
});
