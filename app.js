// let express=require('express');
// let axios=require('axios');
// // let {createClient}=require('redis');
// let a=require('./demo');
// console.log(a,"a");
// let app=express();

// app.use(express.json());
// // const client = createClient('redis://default:redispw@localhost:6379');

// app.get('/',async(req,res)=>{
//     try {
//       // console.log('start');
//       //  console.log('end');

//       //  client.on("connect", () => {
//       //    console.log("Connected to Redis");
//       //  });
//       //  client.on("error", (err) => {
//       //    console.error("Redis connection error:", err);
//       //  });
//       //  await client.connect();
//       //  let data = await client.get("gokul");
//        res.status(200).json({ data,l:'jj'});
//     } catch (error) {
//      res.status(400).send(error);   
//     }
  
// });


// app.listen(4000);


// const cron = require("node-cron");
// const express = require("express");

// const app = express();

// cron.schedule("* * * * * *", function () {
//   console.log("---------------------");
//   console.log("running a task every 15 seconds");
// });

// app.listen(3000, () => {
//   console.log("application listening.....");
// });

import { GapCasinoException } from "./exception.js";
import helperFunction from './helper.js'
console.log('hsi');

try {
  helperFunction('enoda error tha');
  console.log('after thus');
} catch (error) {
  console.log("error",error.status,error.balance);
}


