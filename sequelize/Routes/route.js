const createData=require('../controllers/createData');
const express=require('express');

const route=express.Router();

route.get('/create',createData);

module.exports=route;
