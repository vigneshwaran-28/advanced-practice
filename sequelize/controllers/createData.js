// const { now } = require('sequelize/types/utils');
// const Candidate = require("../models/candidate");
const db=require('../models/index');
// console.log("can", Candidate);
const createData=async(req,res)=>{
    let data = await db.candidates.create({
      name: "vignesh",
      age: "22",
      dob: Date.now(),
    });
    // console.log('created data:',data);
    res.send('data created!');
};

module.exports=createData;