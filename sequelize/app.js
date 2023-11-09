const express = require("express");
const db = require("./config/connection");
const route=require('./Routes/route');
const app = express();
app.use(express.json());
app.listen(3000);
app.get("/", (req, res) => {
  console.log("server started");
  res.send("server started");
});
app.use(route);
db.sequelize.authenticate().then(() => console.log("db connected!"));

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Book table created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });
