const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
const port = process.env.PORT;
const dbHelper = require("./dbHelper/dbHelper.js");
const userRoute = require("./module/user/userRoute");
const companyRoute = require("./module/company/companyRoute");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.send("<h1>Welcome to CMS Server</h1>");
});

app.use("/users", userRoute);
app.use("/company", companyRoute);

app.listen(port, (err) => {
  if (err) {
    console.log("server is not in listining mood!!");
    return;
  }
  console.log("server is in listning mood");
  dbHelper.dbConnector();
});
