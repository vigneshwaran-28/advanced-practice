const express = require("express");
const { addData, findUser,updateUser } = require("./prisma");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("succesful");
});

app.get("/addData", (req, res) => {
  addData();
  res.send("added Successfully!");
});

app.get("/getInfo", async (req, res) => {
  let data = await findUser();
  res.status(200).send({ "retreived Data:": data });
});

app.get('/updateUser',async(req,res)=>{
    let result=await updateUser();
    res.status(200).send({"updated user":result});
});

app.listen(3002);
